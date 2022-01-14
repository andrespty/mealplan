import { useEffect, useState } from "react"
import { get_meal } from "../../../utils/Fetch_Functions/Meal"
import { get_calories_from_meal, get_macros_from_meal } from '../../../utils/ConversionFunctions'

const useMealDetails = (mealID) => {

    const [ info, setInfo ] = useState(initial_state)

    useEffect(() => {
        get_meal({id:mealID})
        .then(res => {
            let calories = get_calories_from_meal(res)
            const { protein, fat, carbs } = get_macros_from_meal(res)
            console.log(protein)
            console.log(carbs)
            console.log(fat)
            setInfo({
                ...res,
                calories:calories.toFixed(0),
                data:[]
            })
            console.log(res)
        })
    }, [])
    
    return { info }
}

const initial_state = {
    calories:'',
    creator:'',
    description:'',
    isMeal:Boolean,
    name:'',
    recipe:[],
    _id:''
}

const recipe = {
    food: {
        serving_size:{},
        nutritional_facts:{},
        isMeal:Boolean,
        _id:'',
        name:'',
        description:'',
        creator:''
    },
    serving_size:{
        number_of_servings:'',
        serving:'',
        serving_unit:''
    },
    _id:''
}

export default useMealDetails