import { useEffect, useState } from "react"
import { get_food_details } from "../../../utils/Fetch_Functions/Food"
const convert = require('convert-units')

const useFoodDetails = (editFood, save_edit) => {

    const [ info, setInfo ] = useState(initial_info)

    useEffect(() => {
        get_food_details({foodID:editFood._id})
        .then(response => {
            let data = response.data[0]
            console.log(data)
            let serving_options = convert().from(data.serving_size.serving_unit).possibilities().filter(unit => !units_prohibitted.includes(unit))
            let conversion = convert(1).from(editFood.unit).to(data.serving_size.serving_unit)

            setInfo(state => ({
                ...state,
                isLoading:false,
                food: data,
                nutritional_data: {
                    ...data.nutritional_facts,
                    calories: (data.nutritional_facts.calories * conversion * editFood.number).toFixed(1),
                    protein: (data.nutritional_facts.protein * conversion * editFood.number).toFixed(1),
                    total_carbohydrates: (data.nutritional_facts.total_carbohydrates * conversion * editFood.number).toFixed(1),
                    total_fat: (data.nutritional_facts.total_fat * conversion * editFood.number).toFixed(1),
                },
                serving_sizes:serving_options,
                inputs:{unit:editFood.unit, number:editFood.number, serving:editFood.serving},
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
    
    const modify = ({unit, number, serving}) => {

        setInfo(state => {
            let new_serving = serving ? serving : state.inputs.serving   //g
            let serving_ratio = new_serving / info.food.serving_size.serving
            let from_unit = unit ? unit : state.inputs.unit  //g
            let n_servings = number ? number : state.inputs.number
            let conversion = convert(1).from(from_unit).to(state.food.serving_size.serving_unit)
            
            return ({
                ...state,
                inputs: {
                    unit: from_unit,
                    number: n_servings,
                    serving: new_serving
                },
                nutritional_data:{
                    ...state.nutritional_data,
                    calories:(state.food.nutritional_facts.calories * conversion * n_servings * parseFloat(serving_ratio)).toFixed(1),
                    protein: (state.food.nutritional_facts.protein * conversion * n_servings * parseFloat(serving_ratio)).toFixed(1),
                    total_carbohydrates:(state.food.nutritional_facts.total_carbohydrates * conversion * n_servings * parseFloat(serving_ratio)).toFixed(1),
                    total_fat:(state.food.nutritional_facts.total_fat * conversion * n_servings * parseFloat(serving_ratio)).toFixed(1)
                }
                // Add other nutritional facts here
            })
        })
        
    }

    const save = () => {
        save_edit({
            _id:info.food._id,
            serving_size:{
                number_of_servings: info.inputs.number,
                serving_unit: info.inputs.unit,
                serving:info.inputs.serving
            },
            nutritional_facts:{
                calories: info.nutritional_data.calories,
                protein: info.nutritional_data.protein,
                total_carbohydrates: info.nutritional_data.total_carbohydrates,
                total_fat: info.nutritional_data.total_fat
            }
        })
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
        number: '',
        serving:''
    }
}

const units_prohibitted = [
    'mcg',
    'mt',
    't'
]