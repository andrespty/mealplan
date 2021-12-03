import { useReducer, useEffect, useState } from 'react'

const useCreateMeal = () => {
    const [ meal_info, setMealInfo ] = useReducer(reducer, initial_info)
    const [ foodID, setFoodID ] = useState(0)
    
    useEffect(() => {
        let cal = 0
        meal_info.recipe.forEach((food) => {
            console.log(food)
            console.log(food.nutritional_facts.calories)
            console.log(food.serving_size.serving)

            // food.serving_size
        })
    }, [meal_info.recipe])

    const create_meal = () => {
        console.log(meal_info)
    }

    return { meal_info, setMealInfo, create_meal, foodID, setFoodID }
}

const initial_info = {
    name:'',
    items:[],
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