const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://tecnodix2020:p5ehmI7wQkrWsLIP@cluster0.rlryi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000)

module.exports = { app }