const mongoose = require('mongoose');

const smartphoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    operatingSystem: {
        type: String,
        enum: ["Android", "iOS", "Windows Phone", "Other"],
    },
    displaySize: String,
    storage: String,
    ram: String,
    cameraSpecs: {
        megapixels: Number,
        lensType: String,
        sensorType: String,
        videoResolution: String,
        wifi: Boolean,
    },
    batteryCapacity: String,
    connectivity: [{
        type: String,
        enum: ["4G", "5G", "Wi-Fi", "Bluetooth", "LTE", "NFC"],
    },],
    price: Number,
    colorsAvailable: [{
        type: String,
    },],
    features: [String],

}, 
{
    timestamps: true,
});

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);
module.exports = Smartphone;