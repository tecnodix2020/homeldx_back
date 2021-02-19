const express = require('express')

const CityController = require('./src/controllers/CityController')
const CountryController = require('./src/controllers/CountryController')
const StateController = require('./src/controllers/StateController')
const EmployeeController = require('./src/controllers/EmployeeController')

const routes = express.Router()

// City routes
routes.get('/city', CityController.index)
routes.get('/city/:city_id', CityController.getById)
routes.post('/city', CityController.store)
routes.put('/city/:city_id', CityController.update)

// Country routes
routes.get('/country', CountryController.index)
routes.get('/country/:country_id', CountryController.getById)
routes.post('/country', CountryController.store)
routes.put('/country/:country_id', CountryController.update)

// State routes
routes.get('/state', StateController.index)
routes.get('/state/:state_id', StateController.getById)
routes.post('/state', StateController.store)
routes.put('state/:state_id', StateController.update)

// Employee routes
routes.get('/employee', EmployeeController.index)
routes.get('/employee/:employee_id', EmployeeController.getById)
routes.post('/employee', EmployeeController.store)
routes.put('/employee/:employee_id', EmployeeController.update)

module.exports = routes