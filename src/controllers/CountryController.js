const Country = require('../models/Country')

module.exports = {
  async index (request, response) {
    const countries = await Country.find({})

    return response.json(countries)
  },

  async store (request, response) {
    const { description } = request.body

    const country = await Country.create({
      description,
    })

    return response.status(201).json(country)
  },

  async update (request, response) {
    const { country_id } = request.params
    const country = await Country.findById(country_id)

    if (!country) {
      return response.status(400).json({ error: 'Country does not exists' })
    }

    const { description } = request.body

    const newCountry = await Country.findByIdAndUpdate(country_id, { $set: {
      description: description,
    }})

    return response.json(newCountry)
  },

  async getById (request, response) {
    const { country_id } = request.params
    const country = await Country.findById(country_id)

    if (!country) {
      return response.status(400).json({ error: 'Country does not exists' })
    }

    return response.json(country)
  }
}