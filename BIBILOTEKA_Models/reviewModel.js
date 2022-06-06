const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  text: String,
  clientId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Client'
  },
 
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review