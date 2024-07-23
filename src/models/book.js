
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: [String], // array of strings
    pages: { type: Number, required: true },
    ratings: { type: Number, required: true }
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;


