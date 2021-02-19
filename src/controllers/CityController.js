const State = require('../models/State')
const City = require('../models/City')

module.exports = {
  async index (request, response) {
    const cities = await City.find({})

    return response.json(cities)
  },

  async store (request, response) {
    const { description, state_id } = request.body

    const state = await State.findById(state_id)

    if (!state) {
      return response.status(400).json({ error: 'State does not exists '})
    }

    const city = await City.create({
      state: state_id,
      description
    })

    return response.json(city)
  },

  async update (request, response) {
    const { city_id } = request.params
    const city = await City.findById(city_id)

    if (!city) {
      return response.status(400).json({ error: 'City does not exists' })
    }

    const { description, state_id } = request.body

    const state = await State.findById(state_id)

    if (!state) {
      return response.status(400).json({ error: 'State does not exists '})
    }

    const newCity = await City.findByIdAndUpdate(city_id, { $set: {
      state: state_id,
      description: description
    }})

    return response.json(newCity)
  },

  async getById (request, response) {
    const { city_id } = request.params
    const city = await City.findById(city_id)

    if (!city) {
      return response.status(400).json({ error: 'City does not exists' })
    }

    return response.json(city)
  }
}