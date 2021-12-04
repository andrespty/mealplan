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
                food: response.data[0],
                // data: [
                //     {title:'Protein', value:parseInt(response.data[0].nutritional_facts.protein), color:''},
                //     {title:'Carbs', value:parseInt(response.data[0].nutritional_facts.total_carbohydrates), color:''},
                //     {title:'Fat', value:parseInt(response.data[0].nutritional_facts.saturated_fat), color:''},
                // ]
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