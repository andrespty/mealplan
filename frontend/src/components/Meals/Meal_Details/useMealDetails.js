import { useEffect, useState } from "react"
import { get_meal } from "../../../utils/Fetch_Functions/Meal"
import { get_calories_from_meal, get_macros_from_meal } from '../../../utils/ConversionFunctions'

const useMealDetails = (mealID) => {

    const [ info, setInfo ] = useState(initial_state)

    useEffect(() => {
        get_meal({id:mealID})
        .then(res => {
            let calories = get_calories_from_meal(res)
            const { protein, fat, carbs } = get_macros_from_meal(res) // returns floats
            setInfo({
                ...res,
                calories:calories.toFixed(0),
                data:[
                    {
                        name:'Carbs',
                        value: carbs * 4
                    },
                    {
                        name:'Protein',
                        value: protein * 4
                    },
                    {
                        name:'Fat',
                        value: fat * 9
                    }
                ],
                macros: {protein, fat, carbs}
            })
            console.log(res)
        })
    }, [])
    
    const edit = () => {
        setInfo(prevState => ({...prevState, isEditing:!prevState.isEditing}))
    }

    const remove = (id) => {
        let recipe = [...info.recipe].filter((food) => food._id !== id)
        setInfo(prevState => ({...prevState, recipe:recipe}))
    }

    return { info, edit, remove }
}

const initial_state = {
    calories:'',
    creator:'',
    description:'',
    isMeal:Boolean,
    name:'',
    recipe:[],
    _id:'',
    data:[],
    macros:{},
    isEditing: false
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