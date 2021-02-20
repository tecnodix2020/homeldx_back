const Employee = require('../models/Employee')
const City = require('../models/City')

module.exports = {
  async index (request, response) {
    const employees = await Employee.find({})

    return response.json(employees)
  },

  async store (request, response) {
    const {
      name,
      email,
      job,
      cep,
      city_id,
      address,
      gpslat,
      gpslon
    } = request.body

    const city = await City.findById(city_id)

    if (!city) {
      return response.status(400).json({ error: 'City does not exists '})
    }

    const employee = await Employee.create({
      city: city_id,
      name,
      email,
      job,
      cep,
      address,
      gpslat,
      gpslon
    })

    return response.json(employee)
  },

  async update (request, response) {
    const { employee_id } = request.params
    const employee = await Employee.findById(employee_id)

    if (!employee) {
      return response.status(400).json({ error: 'Employee does not exists' })
    }

    const {
      name,
      email,
      job,
      cep,
      city_id,
      address,
      gpslat,
      gpslon
    } = request.body

    const city = await City.findById(city_id)

    if (!city) {
      return response.status(400).json({ error: 'City does not exists '})
    }

    const newEmployee = await Employee.findByIdAndUpdate(employee_id, { $set: {
      city: city_id,
      name: name,
      email: email,
      job: job,
      cep: cep,
      address: address,
      gpslat: gpslat,
      gpslon: gpslon
    }})

    return response.json(newEmployee)
  },

  async getById (request, response) {
    const { employee_id } = request.params
    const employee = await Employee.findById(employee_id)

    if (!employee) {
      return response.status(400).json({ error: 'Employee does not exists' })
    }

    return response.json(employee)
  }
}