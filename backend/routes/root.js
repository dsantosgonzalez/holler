const express = require("express");
const router = express.Router();

// Routes
const hazardRoutes = require("./hazards");
const totalRoutes = require("./totals");
const aiRoutes = require("./ai-model");

router.use('/hazards', hazardRoutes);
router.use('/totals', totalRoutes);
router.use('/report', aiRoutes);

module.exports = router;