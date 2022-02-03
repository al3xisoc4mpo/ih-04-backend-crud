// ./models/Book

// 1. IMPORTACIÓN
const mongoose = require("mongoose")

// 2. SCHEMA
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

// 3. MODELO
const Book = mongoose.model("Book", bookSchema)

// 4. EXPORTACIÓN
module.exports = Book