const express = require('express');
const fs = require('fs');
const path = require('path');
const { PythonShell } = require('python-shell');

const router = express.Router();

router.post('/report', async (req, res) => {
    const { description, image } = req.body; // Capture description and image (base64)
    if (image) {
        // Decode base64 image
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Save the image temporarily if needed for processing in Python
        const imagePath = path.join(__dirname, 'uploads', `${Date.now()}.png`);
        fs.writeFileSync(imagePath, buffer);

        // Define options for PythonShell
        let options = {
            scriptPath: "./backend/models/watsonai.py",
            args: [description, imagePath]  // Pass description and saved image path as args
        };

        // Run the Python script with the description and image path
        PythonShell.run("watsonai.py", options, (err, result) => {
            if (err) {
                console.error("Error running Python script:", err);
                return res.status(500).json({ message: 'Error processing report' });
            }

            console.log("Python script result:", result);

            // Remove the temporary image file after processing
            fs.unlinkSync(imagePath);

            res.status(200).json({ message: 'Report processed successfully', result });
        });
    } else {
        res.status(400).json({ message: 'Image is required' });
    }
});

module.exports = router;
