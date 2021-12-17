const router = require('express').Router()
let Meal = require('../models/meal.model')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/').get((request, response) => {
    console.log(request.baseUrl + request.route.path)

    Meal.find()
    .then(meals => response.json(meals))
    .catch(error => response.status(400).json({error: error}))
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