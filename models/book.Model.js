const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true, 
    },
    genre: [{
        type: String,
        enum: ["Fiction", "Non-Fiction", "Mystery", "Thriller", "Science Fiction", "Fantacy", "Romance", "Historical", "Biography", "Self-Help", "Other"],
    },],
    language: {
        type: String,
        required: true, 
    },
    country: {
        type: String,
        default: "United States",
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    summary: String,
    coverImageURL: String,
},
{
    timestamps: true,
},
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;