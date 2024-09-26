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
mealsRoutes.get('/count-meals/:id', mealsController.count)
mealsRoutes.get('/count-diet-meals/:id', mealsController.countDietMeals)
mealsRoutes.get('/count-cheat-meals/:id', mealsController.countCheatMeals)

// Exporta
module.exports = mealsRoutes