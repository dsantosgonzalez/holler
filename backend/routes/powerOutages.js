const express = require("express");
const router = express.Router();
const PowerOutages = require("../models/PowerOutages");

router.get("/all", async (req, res) => {
    try {
        const powerOutages = await PowerOutages.find();
        res.json(powerOutages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;