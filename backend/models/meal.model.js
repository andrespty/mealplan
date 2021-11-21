const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mealSchema = new Schema({

})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal