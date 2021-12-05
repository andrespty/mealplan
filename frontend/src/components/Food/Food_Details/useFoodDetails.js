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
                info: data,
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
    
    const modify = (isServing, value) => {
        console.log(isServing)
        if (isServing){
            setInfo(state => {
                let conversion = convert(1).from(value).to(state.food.serving_size.serving_unit)
                
                return ({
                    ...state,
                    info: {
                        ...state.info,
                        serving_size:{
                            ...state.info.serving_size,
                            serving_unit: value
                        },
                        nutritional_facts: {
                            ...state.info.nutritional_facts,
                            calories:(state.food.nutritional_facts.calories * conversion).toFixed(1),
                            protein: (state.food.nutritional_facts.protein * conversion).toFixed(1),
                            total_carbohydrates:(state.food.nutritional_facts.total_carbohydrates * conversion).toFixed(1),
                            total_fat:(state.food.nutritional_facts.total_fat * conversion).toFixed(1)
                            // Add other nutritional facts here
                        }
                    }
                })
            })
        }
        else{
            setInfo(state => ({
                ...state,
                info:{
                    ...state.info,
                    serving_size:{
                        ...state.info.serving_size,
                        number_of_servings: value
                    },
                    nutritional_facts:{
                        ...state.info.nutritional_facts,
                        calories:(state.food.nutritional_facts.calories * value).toFixed(1),
                        protein: (state.food.nutritional_facts.protein * value).toFixed(1),
                        total_carbohydrates:(state.food.nutritional_facts.total_carbohydrates * value).toFixed(1),
                        total_fat:(state.food.nutritional_facts.total_carbohydrates * value).toFixed(1),
                    }
                },
            }))
        }

    }

    return { info, modify }
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
    info: {
        creator:{},
        description:'',
        name:'',
        nutritional_facts:{},
        serving_size:{},
        _id:''
    }
}