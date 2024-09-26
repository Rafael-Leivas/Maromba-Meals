const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MealsController{

   async create(request, response){
       try{
           const { name, description, date, dietMeal, userId  } = request.body

           const meal = await prisma.meal.create({
               data: {
                   name,
                   description,
                   date,
                   dietMeal,
                   user: {
                    connect: { id: userId }
                }
               },
           })

           response.json(meal)
       }catch (err) {
           return response.status(409).send()
       }
   }

   async show(request, response){
    try{
            const meals = await prisma.meal.findMany();

            response.json(meals)
        
        }catch (err) {
            return response.status(409).send()
        }
    }

    async update(request, response){
        try{
           
            const { name, description, date, dietMeal } = request.body
            const { id } = request.params
           
            const result = await prisma.meal.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    description: description,
                    date: date,
                    dietMeal: dietMeal
                },
            });
 
            return response.status(200).send()
 
        }catch (err) {
            return response.status(409).send()
        } 
    }

    async delete(request, response){
        try{
            const { id } = request.params
           
            const result = await prisma.meal.delete({
                where: {
                    id: id,
                },
            });
 
            return response.status(200).send()
 
        }catch (err) {
            return response.status(409).send()
        } 
    }

    async count(request, response) {
        try {
            const { id } = request.params;
    
            const mealCount = await prisma.meal.count({
                where: {
                    userId: id
                }
            });
    
            response.json({ count: mealCount });
        
        } catch (err) {
            return response.status(409).send();
        }
    }

    async countDietMeals(request, response) {
        try {
            const { id } = request.params;
    
            const mealCount = await prisma.meal.count({
                where: {
                    AND: [
                        { userId: id },
                        { dietMeal: true }
                    ]
                }
            });
    
            response.json({ count: mealCount });
    
        } catch (err) {
            return response.status(409).send();
        }
    }

    async countCheatMeals(request, response) {
        try {
            const { id } = request.params;
    
            const mealCount = await prisma.meal.count({
                where: {
                    AND: [
                        { userId: id },
                        { dietMeal: false }
                    ]
                }
            });
    
            response.json({ count: mealCount });
    
        } catch (err) {
            return response.status(409).send();
        }
    }
}

module.exports = MealsController

