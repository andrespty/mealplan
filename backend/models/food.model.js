const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    description:{
        type: String,
        required: false,
        trim: true
    },
    serving_size:{
        serving: {type: String, required:true},
        serving_unit: {type: String, required:true},
        number_of_servings: {type: String, default:'1'}
    },
    nutritional_facts:{
        calories: {type: String, required:true},
        total_fat: {
            type:String,
            default:0
        },
        saturated_fat: String,
        polyunsaturated_fat: String,
        monounsaturated_fat: String,
        trans_fat: String,
        cholesterol: String,
        sodium: String,
        potassium: String,
        total_carbohydrates: {
            type:String,
            default:0
        },
        dietary_fiber: String,
        sugars: String,
        added_sugars: String,
        sugar_alcohols: String,
        protein: {
            type:String,
            default:0
        },
        vitamin_A: String,
        vitamin_C: String,
        vitamin_D: String,
        calcium: String,
        iron: String
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required:true
    },
    isMeal:{
        type: Boolean,
        default: false
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food