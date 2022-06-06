const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    reviewId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Review'
    },

    rented:{
        default: false,
        type: Boolean
    },

    client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'
    },

    genreId: {
        type:  mongoose.SchemaTypes.ObjectId,
        ref:  'Genres'
    }


})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book  