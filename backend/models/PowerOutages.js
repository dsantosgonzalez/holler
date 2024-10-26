const mongoose = require('mongoose');

const powerOutageSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,
    severity: String
}, {collection: "PowerOutages"})

const PowerOutages = mongoose.model('PowerOutages', powerOutageSchema);

module.exports = PowerOutages;