const express = require("express");
const router = express.Router();

// Routes
const powerOutagesRoutes = require("./powerOutages");

router.use('/power_outages', powerOutagesRoutes);

module.exports = router;