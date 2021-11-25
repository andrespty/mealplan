import { useReducer, useState } from "react"
import { create_food } from "../../../utils/FetchFunctions"

const useCreateFood = (userID) => {
    const [ info, setInfo ] = useReducer(reducer, initial_info)
    const [ isLoading, setIsLoading ] = useState(false)

    const submit = () => {
        setIsLoading(true)
        
        console.log(info)
        let body = {...info, creator:userID}
        create_food({body: body})
        .then(res => {
            console.log(res)
            setIsLoading(false)
        })
    }

    return { info, setInfo, isLoading, submit }
}

export default useCreateFood

const initial_info = {
    name:'',
    description:'',
    serving_size:{
        serving: 1.0,
        serving_unit: '',
        servings_per_container: 1.0,
    },
    nutritional_facts:{
        calories:'',
        total_fat:'',
        saturated_fat:'',
        polyunsaturated_fat:'',
        monounsaturated_fat:'',
        trans_fat:'',
        cholesterol:'',
        sodium:'',
        potassium:'',
        total_carbohydrates:'',
        dietary_fiber:'',
        sugars:'',
        added_sugars:'',
        sugar_alcohols:'',
        protein:'',
        vitamin_A:'',
        vitamin_C:'',
        vitamin_D:'',
        calcium:'',
        iron:''
    },
}

const reducer = (state, action) => {
    switch (action.type){
        case 'nutri':
            return {
                ...state,
                nutritional_facts: {
                    ...state.nutritional_facts,
                    ...action.value
                }
            }
        case 'serving':
            return {
                ...state,
                serving_size: {
                    ...state.serving_size,
                    ...action.value
                }
            }
        default: 
            return {
                ...state, 
                ...action
            }
    }
}