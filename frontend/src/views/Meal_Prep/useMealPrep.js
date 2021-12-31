import { useReducer, useState, useCallback } from "react"
import { get_calories_from_food, get_calories_from_meal } from "../../utils/ConversionFunctions"

const useMealPrep = () => {
    const [ week, setWeek ] = useReducer(reducer, initial_state)
    const [ list, setList ] = useState(initial_list)

    const handle_drag = (obj)=> {
        if ( !obj.destination){ return }
        if ( obj.destination.droppableId === 'menu'){ return }
        const {index:indexSource} = obj.source
        const { droppableId:time_day } = obj.destination

        // Find in which day and mealtime is been added
        let time = time_day.split('_')[0]
        let day = time_day.split('_')[1]
        let calories = 0

        // Finding in which list to search on
        let attribute = Object.keys(list).map((name, key) => {
            if (list[name].length > 0){
                return name
            }
            else{
                return ''
            }
        })
        attribute = attribute.filter(att => att !== '')[0]
        
        // Find object in list
        let value = list[attribute][indexSource]
        if (value.isMeal){
            calories = get_calories_from_meal(value)
        }
        else {
            calories = get_calories_from_food(value)
        }
        setWeek({day:day, time:time, value:value, calories:calories})
    }

    const remove = ({time,day,_id}) => {
        console.log('Remove ' + time + ' ' + day + ` ${_id}`)
        let newList = [...week[day][time]]
        
        setWeek({day:day, time:time, value:[]})
        
    }
    return { week, list, setList, handle_drag, remove}
}

export default useMealPrep

const initial_list = {
    meals:[],
    foods:[],
    search:[]
}

const day = {
    breakfast:[],
    lunch:[],
    dinner:[],
    snacks:[],
    calories:0
}

const initial_state = {
    monday:{...day},
    tuesday:{...day},
    wednesday:{...day},
    thursday:{...day},
    friday:{...day},
    saturday:{...day},
    sunday:{...day}
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.day]:{
            ...state[action.day],
            [action.time]: [...state[action.day][action.time], action.value],
            calories: parseFloat(state[action.day].calories) + parseFloat(action.calories)
        }
    }
}