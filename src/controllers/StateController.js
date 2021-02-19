const Country = require('../models/Country')
const State = require('../models/State')

module.exports = {
  async index (request, response) {
    const states = await State.find({})

    return response.json(states)
  },

  async store (request, response) {
    const { description, country_id } = request.body

    const country = await Country.findById(country_id)

    if (!country) {
      return response.status(400).json({ error: 'Country does not exists '})
    }

    const state = await State.create({
      country: country_id,
      description
    })

    return response.json(state)
  },

  async update (request, response) {
    const { state_id } = request.params
    const state = await State.findById(state_id)

    if (!state) {
      return response.status(400).json({ error: 'State does not exists' })
    }

    const { description, country_id } = request.body

    const country = await Country.findById(country_id)

    if (!country) {
      return response.status(400).json({ error: 'Country does not exists '})
    }

    const newState = await State.findByIdAndUpdate(state_id, { $set: {
      country: country_id,
      description: description
    }})

    return response.json(newState)
  },

  async getById (request, response) {
    const { state_id } = request.params
    const state = await State.findById(state_id)

    if (!state) {
      return response.status(400).json({ error: 'State does not exists' })
    }

    return response.json(state)
  }
}