const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: String,
    books: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book'
}],
blocked: {
    default: false,
    type: Boolean
},

})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client