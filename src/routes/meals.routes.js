const { Router } = require('express')

const MealsController = require('../controllers/MealsController')

const mealsRoutes = Router()

// Controller
const mealsController= new MealsController()

// Rotas
mealsRoutes.post('/create', mealsController.create)
mealsRoutes.get('/show', mealsController.show)
mealsRoutes.put('/update/:id', mealsController.update)
mealsRoutes.delete('/delete/:id', mealsController.delete)
mealsRoutes.get('/show-meals/:id', mealsController.showById)
mealsRoutes.get('/user-metrics/:id', mealsController.metrics)
mealsRoutes.get('/user-meals/:id', mealsController.showMealByUser)

mealsRoutes.get('/ping', mealsController.ping)



// Exporta
module.exports = mealsRoutes