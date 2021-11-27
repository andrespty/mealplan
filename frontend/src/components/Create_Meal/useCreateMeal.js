import { useReducer } from 'react'

const useCreateMeal = () => {
    const [ meal_info, setMealInfo ] = useReducer(reducer, initial_info)

    const create_meal = () => {
        console.log(meal_info)
    }

    return { meal_info, setMealInfo, create_meal }
}

const initial_info = {
    name:'',
    items:[],
    recipe: []
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export default useCreateMeal