const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({

name: String,
description: String


})

const Genres = mongoose.model('Genres', genreSchema)

module.exports = Genres