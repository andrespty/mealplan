import { useEffect, useState } from "react"
import { get_food_details } from "../../../utils/FetchFunctions"
const convert = require('convert-units')

const useFoodDetails = (foodID, save_edit) => {

    const [ info, setInfo ] = useState(initial_info)

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
                nutritional_data: data.nutritional_facts,
                serving_sizes:serving_options,
                inputs:{unit:data.serving_size.serving_unit, number:data.serving_size.number_of_servings},
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

        setInfo(state => {
            let from_unit = unit ? unit : state.inputs.unit
            let n_servings = number ? number : state.inputs.number
            let conversion = convert(1).from(from_unit).to(state.food.serving_size.serving_unit)
            
            return ({
                ...state,
                inputs: {
                    unit: from_unit,
                    number: n_servings
                },
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

    const save = () => {
        save_edit(info.food)
    }

    return { info, modify, save }
}

export default useFoodDetails
const initial_info = {
    isLoading: true,
    food: {                 // This will not change
        creator:{},
        description:'',
        name:'',
        nutritional_facts:{},
        serving_size:{},
        _id:''
    },
    data:[],                // Will not change, this renders the graph
    serving_sizes: [],      // List of the serving sizes available
    nutritional_data: {},   // this will be changing with parameters
    inputs: {
        unit: '',
        number: ''
    }
}