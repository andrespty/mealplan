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
        console.log(food)
        let recipe_foods = [...meal_info.recipe]
        let index = recipe_foods.findIndex(obj => obj._id === food._id)
        console.log(recipe_foods[index])
        recipe_foods[index].nutritional_facts = {...recipe_foods[index].nutritional_facts, ...food.nutritional_facts}
        recipe_foods[index].serving_size = {...recipe_foods[index].serving_size, ...food.serving_size}
        setMealInfo(state => ({
            ...state,
            recipe: recipe_foods
        }))
        detailsClose()
    }

    return { meal_info, setMealInfo, create_meal, editFood, save_edit, open_details }
}

const initial_info = {
    name:'',
    items:[],       // ID of foods
    recipe: [],
    calories:0
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export default useCreateMeal