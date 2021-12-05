import { useEffect, useState } from "react"
import { get_food_details } from "../../../utils/FetchFunctions"
const convert = require('convert-units')

const useFoodDetails = (foodID) => {

    const [ info, setInfo ] = useState(initial_info)

    console.log(convert().from('oz').possibilities())

    useEffect(() => {
        get_food_details({foodID:foodID})
        .then(response => {
            let data = response.data[0]
            console.log(data)
            let serving_options = convert().from(data.serving_size.serving_unit).possibilities()
            
            setInfo(state => ({
                ...state,
                isLoading:false,
                food: data,
                serving_sizes:serving_options,
                data:[
                    {
                        name:'Carbs',
                        value: parseInt(data.nutritional_facts.total_carbohydrates) * 4
                    },
                    {
                        name:'Protein',
                        value: parseInt(data.nutritional_facts.protein) * 4
                    },
                    {
                        name:'Fat',
                        value: parseInt(data.nutritional_facts.total_fat) * 9
                    }
                ]
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
    data:[],
    serving_sizes: []
}