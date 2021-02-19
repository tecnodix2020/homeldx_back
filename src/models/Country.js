const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
  description: String
})

module.exports = mongoose.model('Country', CountrySchema)