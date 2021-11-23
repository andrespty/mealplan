const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mealSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    description: String,
    serving_size:{
        serving: {type: String, required:true},
        serving_unit: {type: String, required:true},
        servings_per_container: {type: String, required:true},
    },
    nutritional_facts:{
        calories: {type: String, required:true},
        total_fat: String,
        saturated_fat: String,
        polyunsaturated_fat: String,
        monounsaturated_fat: String,
        trans_fat: String,
        cholesterol: String,
        sodium: String,
        potassium: String,
        total_carbohydrates: String,
        dietary_fiber: String,
        sugars: String,
        added_sugars: String,
        sugar_alcohols: String,
        protein: String,
        vitamin_A: String,
        vitamin_C: String,
        vitamin_D: String,
        calcium: String,
        iron: String
    }
    
    
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal