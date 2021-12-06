import { useEffect, useState } from "react"
import { get_food_details } from "../../../utils/FetchFunctions"
const convert = require('convert-units')

const useFoodDetails = (foodID) => {

    const [ info, setInfo ] = useState(initial_info)
    const [ params, setParams ] = useState({units:'', number:''})

    useEffect(() => {
        get_food_details({foodID:foodID})
        .then(response => {
            let data = response.data[0]
            console.log(data)
            let serving_options = convert().from(data.serving_size.serving_unit).possibilities()
            
            setParams({units:data.serving_size.serving_units, number:data.serving_size.number_of_servings})
            setInfo(state => ({
                ...state,
                isLoading:false,
                food: data,
                nutritional_data: data.nutritional_facts,
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
    
    const modify = ({unit, number}) => {
    
        if (unit){
            setParams(state => ({
                ...state,
                units:unit
            }))
        }
        else{
            setParams(state => ({
                ...state,
                number:number
            }))
        }

        setInfo(state => {
            let from_unit = ''
            let n_servings = 0
            if (unit){
                from_unit = unit
                n_servings = params.number
            }
            else{
                from_unit = params.units
                n_servings = number
            }

            console.log(from_unit)
            console.log(n_servings)
            let conversion = convert(1).from(from_unit).to(state.food.serving_size.serving_unit)
            
            return ({
                ...state,
                nutritional_data:{
                    ...state.nutritional_data,
                    calories:(state.food.nutritional_facts.calories * conversion * n_servings).toFixed(1),
                    protein: (state.food.nutritional_facts.protein * conversion * n_servings).toFixed(1),
                    total_carbohydrates:(state.food.nutritional_facts.total_carbohydrates * conversion * n_servings).toFixed(1),
                    total_fat:(state.food.nutritional_facts.total_fat * conversion * n_servings).toFixed(1)
                }
                // Add other nutritional facts here
            })
        })
        
    }

    return { info, modify, params, }
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
    serving_sizes: [],
    nutritional_data: {}
}