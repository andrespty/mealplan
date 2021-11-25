const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mealSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3
    },
    
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal