import { useReducer, useState } from "react"
import { create_food } from "../../../utils/Fetch_Functions/Food"

const useCreateFood = (userID) => {
    const [ info, setInfo ] = useReducer(reducer, initial_info)
    const [ state, setState ] = useState({
        isLoading: false,
        isSuccess:false,
        alert:false,
        status:'success',
    })

    const submit = (e) => {
        e.preventDefault()
        setState(state => ({...state, isLoading:true}))
        
        console.log(info)
        let body = {...info, creator:userID}
        create_food({body: body})
        .then(res => {
            console.log(res)
            setState({isLoading:false, isSuccess:true, status:'success', alert:true})
            setInfo(initial_info)
            setTimeout(() => setState(state => ({...state, alert:false})), 1000)
        })
        .catch(() => {
            setState({isLoading:false, status:'error', isSuccess: false, alert:true})
            setInfo(initial_info)
            setTimeout(() => setState(state => ({...state, alert:false})), 1000)
        })
    }

    return { info, setInfo, state, submit }
}

export default useCreateFood

const initial_info = {
    name:'',
    description:'',
    serving_size:{
        serving: 1.0,
        serving_unit: '',
        number_of_servings:'1'
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