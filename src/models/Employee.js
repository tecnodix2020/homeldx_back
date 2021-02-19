const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  job: String,
  // avatar: String,
  cep: String,
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  address: String,
  gpslat: Number,
  gpslon: Number
})

module.exports = mongoose.model('Employee', EmployeeSchema)