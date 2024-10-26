const express = require("express");
const router = express.Router();

// Routes
const hazardRoutes = require("./hazards");

router.use('/hazards', hazardRoutes);

module.exports = router;