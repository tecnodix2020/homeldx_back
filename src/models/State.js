const mongoose = require('mongoose')

const StateSchema = new mongoose.Schema({
  description: String,
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
})

module.exports = mongoose.model('State', StateSchema)