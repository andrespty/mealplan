import { useEffect, useContext, useState } from 'react'
import { get_my_meals_list } from '../../../utils/Fetch_Functions/Meal'
import { UserContext } from '../../../App'
import { ListMealContext } from '../../Meal_Prep/MealPrep'

const useListMyMeals = () => {

    const { user } = useContext(UserContext)
    const { list, setList } = useContext(ListMealContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        get_my_meals_list({id: user._id}) 
        .then(res => {
            setList(prev => ({
                ...prev,
                meals:res
            }))
            setIsLoading(false)
        })

        return () => {
            setList(prev => ({
                ...prev,
                meals:[]
            }))
        }
    }, [])

    return { list, isLoading }
}

export default useListMyMeals