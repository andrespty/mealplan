const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    food: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food',
        required:true
    },
    serving_size:{
        number_of_servings: String,
        serving: String,
        serving_unit: String
    }
})

const mealSchema = new Schema({
    
    name: {
        type: String,
        required: false,
        trim: true,
        minlength:3
    },
    description:{
        type: String,
        required:true,
        trim:true,
        minlength:3,
    },
    recipe:[recipeSchema],
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
    }
    
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal