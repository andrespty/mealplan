const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    foodID: {
        type:Schema.Types.ObjectId,
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
        required: true,
        trim: true,
        minlength:3
    },
    recipe:[recipeSchema]
    
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal