import { useEffect, useState, useContext } from "react"
import { ListMealContext } from '../../Meal_Prep/MealPrep'
import { get_my_food } from "../../../utils/Fetch_Functions/Food"

const useListMyFoods = (userID) => {
    
    const { list, setList } = useContext(ListMealContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        get_my_food({userID: userID})
        .then(json => { 
            setList(prev => ({
                ...prev,
                foods: json.data
            }))
            setIsLoading(false)
        })

        return () => {
            setList(prev => ({
                ...prev,
                foods:[]
            }))
        }
    }, [])

    const save_edit = (food) => {
        console.log('save')
        let edit_list = [...list.foods]
        let index = list.foods.findIndex(obj => obj._id === food._id)
        edit_list[index] = {
            ...edit_list[index],
            serving_size:{
                ...edit_list[index].serving_size,
                ...food.serving_size
            },
            nutritional_facts:{
                ...edit_list[index].nutritional_facts,
                ...food.nutritional_facts
            }
        }
        setList(prev => ({
            ...prev,
            foods:edit_list
        }))
    }

    return { list, save_edit, isLoading }

}

export default useListMyFoods