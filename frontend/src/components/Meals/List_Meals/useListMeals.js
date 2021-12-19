import { useEffect, useState } from "react"
import { get_meals_list } from "../../../utils/FetchFunctions"

const useListMeals = () => {
    
    const [ meals, setMeals ] = useState([])

    useEffect(() => {
        get_meals_list()
        .then(res => {
            // console.log(res)
            setMeals(state => [...state, res[0]])
        })
    }, [])

    return { meals }
}

export default useListMeals