const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    color: [{
        type: String,
        enum: ["red", "blue", "green", "black", "saffron"],
    },
],
size: [{
    type: Number,
    enum: [7, 8, 9, 10, 11],
},
],
price: Number,
image: String,

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
