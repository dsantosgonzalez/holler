const express = require("express");
const router = express.Router();

// Routes
const hazardRoutes = require("./hazards");
const totalRoutes = require("./totals");

router.use('/hazards', hazardRoutes);
router.use('/totals', totalRoutes);

module.exports = router;