import { useReducer, useEffect, useState } from 'react'

const useCreateMeal = (detailsClose, detailsIsOpen) => {
    const [ meal_info, setMealInfo ] = useReducer(reducer, initial_info)
    const [ foodID, setFoodID ] = useState(0)
    
    useEffect(() => {
        let cal = 0
        meal_info.recipe.forEach((food) => {

        })
    }, [meal_info.recipe])

    const create_meal = () => {
        console.log(meal_info)
    }

    const save_edit = (food) => {
        let recipe_foods = [...meal_info.recipe]
        let index = recipe_foods.findIndex(obj => obj._id === food._id)
        recipe_foods[index] = food
        setMealInfo(state => ({
            ...state,
            recipe: recipe_foods
        }))
        detailsClose()
    }

    return { meal_info, setMealInfo, create_meal, foodID, setFoodID, save_edit }
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