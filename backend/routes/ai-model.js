const express = require('express');
const router = express.Router();
const { WatsonXAI } = require("@ibm-cloud/watsonx-ai");
const Hazard = require("../models/Hazard");


router.post('/', async (req, res) => {
    const watsonxAIService = WatsonXAI.newInstance({
        version: "2024-10-27",
        serviceUrl: "https://us-south.ml.cloud.ibm.com"
    })
    
    const paramsDesc = {
        input: `The user is supposed to provide a description of the issue they are facing in regards to a hurricane. Is the issue they provided coherent to classify and interpret what the issue is. If it is, select only one of the categories to which this description pertains to, and only return the category it belongs to: Power Outage, Blocked Road, Flooding, Fire. If it is not, only return 'no.' This is the description: ${req.description}`,
        modelId: 'google/flan-t5-xxl',
        projectId: "da5f6514-2800-4dd3-8125-5b6dc1af22db",
        parameters: {
            max_new_tokens : 100
        }
    }

    const modelParameters = {
        maxTokens: 200,
    };

    const question = 'Select only one of the categories to which this image pertains to, and only return the category it belongs to: Power Outage, Fire, Flooding, Blocked Road.';
    const messages = [
    {
        role: 'user',
        content: [
        {
            type: 'image_url',
            image_url: {
            url: req.body.image,
            },
        },
        {
            type: 'text',
            text: question,
        },
        ],
    },
    ];

    try {
        // Fall back to image classification
        const imageResponse = await watsonxAIService.textChat({
            modelId: 'meta-llama/llama-3-2-11b-vision-instruct',
            projectId: "da5f6514-2800-4dd3-8125-5b6dc1af22db",
            messages,
            ...modelParameters,
        });

    /*
        {
            latitude: latitude,
            longitude: longitude,
            image: pictureData,
            description: description,
            severity: severity
        }
        */

        const imageCategory = imageResponse.result.choices[0].message.content;
        const cleanedImage = imageCategory.replace(/[^\w\s]/g, '');
        const newHazard = new Hazard({
            type: cleanedImage,
            date: Date.now().toString(),
            severity: req.body.severity,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            imageUrl: `image/${cleanedImage}`,
            description: req.body.description
        });
        const insertedHazard = await newHazard.save();
        res.status(200).send({ status: "Succesfull", category: imageCategory });
    } catch (err) {
        console.error("Error during classification:", err);
        res.status(500).send({ error: "Error processing request." });
    }
});

module.exports = router;