const { Router } = require('express')

const MealsController = require('../controllers/MealsController')

const usersRoutes = Router()

// Controller
const mealsController= new MealsController()

// Rotas
usersRoutes.post('/create', mealsController.create)
usersRoutes.get('/show', mealsController.show)
usersRoutes.put('/update/:id', mealsController.update)
usersRoutes.delete('/delete/:id', mealsController.delete)
usersRoutes.get('/count-meals/:id', mealsController.count)
usersRoutes.get('/count-diet-meals/:id', mealsController.countDietMeals)
usersRoutes.get('/count-cheat-meals/:id', mealsController.countCheatMeals)

// Exporta
module.exports = usersRoutes