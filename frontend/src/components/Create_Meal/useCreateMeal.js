import { useReducer, useEffect, useState } from 'react'

const useCreateMeal = (detailsClose, detailsOnOpen) => {
    const [ meal_info, setMealInfo ] = useReducer(reducer, initial_info)
    const [ editFood, setEditFood ] = useState(0)
    
    useEffect(() => {
        let cal = 0
        meal_info.recipe.forEach((food) => {
            cal += parseFloat(food.nutritional_facts.calories)
        })
        // setMealInfo(state => ({...state, calories: cal}))
        console.log(cal)
    }, [meal_info.recipe])

    const create_meal = () => {
        console.log(meal_info)
    }

    const open_details = (food_id) => {
        let index = meal_info.recipe.findIndex(obj => obj._id === food_id)
        let unit = meal_info.recipe[index].serving_size.serving_unit
        let number = meal_info.recipe[index].serving_size.number_of_servings
        setEditFood({_id: food_id, unit:unit, number: number })
        detailsOnOpen()
    }

    const save_edit = (food) => {
        let recipe_foods = [...meal_info.recipe] // List with all ingredients and serving sizes
        let macros = {...meal_info.macros}
        let calories = meal_info.calories
        let index = recipe_foods.findIndex(obj => obj._id === food._id)
        calories -= parseFloat(recipe_foods[index].nutritional_facts.calories)
        macros = {
            protein: macros.protein - parseFloat(recipe_foods[index].nutritional_facts.protein),
            carbs: macros.carbs - parseFloat(recipe_foods[index].nutritional_facts.total_carbohydrates),
            fat: macros.fat - parseFloat(recipe_foods[index].nutritional_facts.total_fat)
        }
        recipe_foods[index].nutritional_facts = {...recipe_foods[index].nutritional_facts, ...food.nutritional_facts}
        recipe_foods[index].serving_size = {...recipe_foods[index].serving_size, ...food.serving_size}
        calories += parseFloat(recipe_foods[index].nutritional_facts.calories)
        macros = {
            protein: macros.protein + parseFloat(recipe_foods[index].nutritional_facts.protein),
            carbs: macros.carbs + parseFloat(recipe_foods[index].nutritional_facts.total_carbohydrates),
            fat: macros.fat + parseFloat(recipe_foods[index].nutritional_facts.total_fat)
        }
        setMealInfo({
            recipe: recipe_foods,
            calories:calories,
            macros: macros
            // chartData
        })
        detailsClose()
    }

    return { meal_info, setMealInfo, create_meal, editFood, save_edit, open_details }
}   

const initial_info = {
    name:'',
    items:[],       // ID of foods
    recipe: [],
    calories:0,
    macros:{
        protein: 0.0,
        carbs: 0.0,
        fat: 0.0
    },
    chartData:[
        {
            name:'Carbs',
            value:0.0
        }
    ]
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export default useCreateMeal