import { useEffect, useState } from "react"
import { get_food_details } from "../../../utils/FetchFunctions"

const useFoodDetails = (foodID) => {

    const [ info, setInfo ] = useState(initial_info)

    useEffect(() => {
        get_food_details({foodID:foodID})
        .then(response => {
            console.log(response.data[0])
            setInfo(state => ({
                ...state,
                isLoading:false,
                food: response.data[0]
            }))
        })

    },[])
    
    return { info }
}

export default useFoodDetails
const initial_info = {
    isLoading: true,
    food: {
        creator:{},
        description:'',
        name:'',
        nutritional_facts:{},
        serving_size:{},
        _id:''
    },
    data:[]
}