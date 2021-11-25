const router = require('express').Router()
let Food = require('../models/food.model')

router.route('/').get((request, response) => {
    console.log(request.baseUrl + request.route.path)

    Food.find()
    .then(foods => response.json(foods))
    .catch(error => response.status(400).json({error:error}))
})

router.route('/').post((request, response) => {
    console.log(request.baseUrl + request.route.path)

    const food = request.body

    const new_food = new Food(food)

    new_food.save()
    .then(food => response.status(200).json({success: true, object: food}))
    .catch(error => response.status(400).json({error:error}))
})

router.route('/users/:creatorID').get((request, response) => {
    console.log(request.baseUrl + request.route.path)

    const {creatorID} = request.params

    Food.find({creator: creatorID}).select('-creator -__v')
    .then(foods_created => response.json({success:true, foods_created: foods_created}))
    .catch(error => response.status(400).json({error:error}))

    
})

module.exports = router