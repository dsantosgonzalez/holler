const express = require("express");
const router = express.Router();
const Hazard = require("../models/Hazard");

router.get("/all", async (req, res) => {
    try {
        const hazards = await Hazard.find();
        res.json(hazards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/power_outages", async (req, res) => {
    try {
        const powerOutages = await Hazard.find({ type: "Power Outage" });
        res.json(powerOutages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/fires", async (req, res) => {
    try {
        const fires = await Hazard.find({ type: "Fire" });
        res.json(fires);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/insert", async (req, res) => {
    try {
        const newHazard = new Hazard(req.body);
        const insertedHazard = await newHazard.save();
        res.status(201).send("Successful!");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/insert/multiple", async (req, res) => {
    try {
        await Hazard.insertMany(req.body);
        res.status(201).send("Successful!");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete("/delete/all", async (req, res) => {
    try {
        await Hazard.deleteMany({});
        res.status(201).send("Successful!");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;