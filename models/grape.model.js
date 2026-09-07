const mongoose = require('mongoose');

const grapeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    calories: Number,
    carbohydrates: Number,
    protein: Number,
    fatUnsaturated: Number,
});

const Grape = mongoose.model("Grape", grapeSchema);
module.exports = Grape;
