const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MealsController{

    async ping(request, response){
        return response.json({ message: 'pong' });
    }

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

    async showById(request, response) {
        try {
            const { id } = request.params;
    
            const meal = await prisma.meal.findUnique({
                where: {
                    id: id
                }
            });
    
            response.json(meal);
    
        } catch (err) {
            return response.status(409).send();
        }
    }

    async metrics(request, response) {
        try {
            const { id } = request.params;

            // Melhor sequência de refeições dentro da dieta
            const meals = await prisma.meal.findMany({
                where: { userId: id },
                orderBy: { date: 'asc' }  // Ordenar as refeições por data
            });

            const totalMeals = meals.length;
            const totalCheatMeals = meals.filter(meal => meal.dietMeal === false).length;
            const totalDietMeals = meals.filter(meal => meal.dietMeal === true).length;

            let sequences = [];    // Array para armazenar sequências
            let currentSequence = [];  // Array para a sequência atual

            meals.forEach(meal => {
                if (meal.dietMeal) {
                    // Se for uma refeição saudável (dietMeal: true), adiciona à sequência atual
                    currentSequence.push(meal);
                } else {
                    // Quando encontrar uma refeição fora da dieta, salva a sequência e reseta
                    if (currentSequence.length > 0) {
                        sequences.push(currentSequence);
                        currentSequence = [];
                    }
                }
            });

            // Após o loop, verifica se há uma sequência restante
            if (currentSequence.length > 0) {
                sequences.push(currentSequence);
            }

            // Encontrar a maior sequência
            let bestSequence = sequences.reduce((max, seq) => seq.length > max.length ? seq : max, []);

            // Retornar numero de refeições em sequencia
            let totalBestSequence = bestSequence.length

            response.json({ total_de_refeicoes: totalMeals, refeicao_fora_dieta: totalCheatMeals, refeicao_saudavel: totalDietMeals, melhor_sequencia: totalBestSequence, melhor_sequencia_itens: bestSequence });

        } catch (err) {
            return response.status(409).send();
        }
    }

    async showMealByUser(request, response) {
        try {
            const { id } = request.params;

            const meals = await prisma.meal.findMany({
                where: {
                    userId: id
                }
            });

            response.json(meals);

        } catch (err) {
            return response.status(409).send();
        }
    }

}

module.exports = MealsController

