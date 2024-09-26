const { Router } = require('express')

const usersRoutes = require('./users.routes')
const mealsRoutes = require('./meals.routes')

const routes = Router()

// Rotas dos controllers
routes.use('/users', usersRoutes)
routes.use('/meals', mealsRoutes)

module.exports = routes
