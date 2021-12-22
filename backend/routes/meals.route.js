const router = require('express').Router()
let Meal = require('../models/meal.model')
const verifyJWT = require('../middleware/verifyJWT')

// get all meals 
router.route('/').get((request, response) => {
    console.log(request.baseUrl + request.route.path)

    console.log(request.params)

    Meal.find().select('-__v').populate('recipe.food')
    .then(meals => response.json(meals))
    .catch(error => response.status(400).json({error: error}))
})

// Get all meals created by a user
router.route('/:id').get((request, response) => {
    console.log('hello')
    const { id } = request.params
    
    Meal.find({creator:id}).select('-__v').populate('recipe.food')
    .then(meals => response.json(meals))
    .catch(error => response.status(400).json({error:error}))
})

// Create Meal
router.route('/').post(verifyJWT, (request, response) => {
    const meal = request.body
    const newMeal = new Meal(meal)

    newMeal.save()
    .then(meal => response.status(200).json(meal))
    .catch(error => response.status(200).json({error: error}))
})

module.exports = router