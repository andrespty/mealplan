import { useEffect, useState, useContext } from 'react'
import { get_my_meals_list } from '../../../utils/Fetch_Functions/Meal'
import { UserContext } from '../../../App'

const useListMyMeals = () => {

    const { user } = useContext(UserContext)
    const [ meals, setMeals ] = useState([])

    useEffect(() => {
        get_my_meals_list({id: user._id}) 
        .then(res => {
            setMeals(res)
        })
    }, [])

    return { meals }
}

export default useListMyMeals