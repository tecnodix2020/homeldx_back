const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
  description: String,
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State'
  },
})

module.exports = mongoose.model('City', CitySchema)