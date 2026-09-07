const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    rating: Number,
    ratingCount: Number,
    reviewCount: Number,
    price: Number,
    originalPrice: Number,
    discount: Number,
    delivery: String,
    stock: Number,
    features: [{
        type: String,
        enum: ["Effective Pixels: 24.2 MP", "Sensor Type: CMOS", "Wifi: Yes", "UHD: 4K", "2 Year Warranty"],
    },],
});

const Camera = mongoose.model("Camera", cameraSchema);
module.exports = Camera;