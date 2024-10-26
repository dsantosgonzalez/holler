const express = require("express");
const router = express.Router();
const Hazard = require("../models/Hazard");

router.get("/all", async (req, res) => {
    try {
        const totals = await Hazard.countDocuments();
        res.json(totals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/power_outages", async (req, res) => {
    try {
        const powerOutageTotals = await Hazard.countDocuments().where("type").equals("Power Outage");
        res.json(powerOutageTotals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/fires", async (req, res) => {
    try {
        const fireTotals = await Hazard.countDocuments().where("type").equals("Fire");
        res.json(fireTotals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;