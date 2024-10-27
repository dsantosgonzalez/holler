const mongoose = require('mongoose');

const HazardSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Power Outage", "Fire", "Flooding", "Blocked Road", "Debris", "Structural Damage"]
    },
    date: { type: String, required: true },
    severity: {
        type: String,
        required: true,
        enum: ["Critical", "Moderate", "Low", "High"]
    },
    longitude: { type: Number, required: true},
    latitude: { type: Number, required: true},
    imageUrl: { type: String, required: true },
    description: { type: String, required: true }
}, {collection: "Hazards"})

const Hazard = mongoose.model('Hazard', HazardSchema);

module.exports = Hazard;