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
        setWeek({day:day, time:time, value:value, calories:calories, type:'add'})
    }

    const remove = useCallback(({time,day,_id}) => {
        console.log('Remove ' + time + ' ' + day + ` ${_id}`)
    
        setWeek({day:day, time:time, _id:_id, type:'remove'})
        
    },[])

    const save = useCallback(({time,day, obj}) => {
        console.log('Save')
        setWeek({day:day, time:time, obj:obj, type:'modify'})
    }, [])


    return { week, list, setList, handle_drag, remove, save}
}

export default useMealPrep

const initial_list = {
    meals:[],
    foods:[],
    search:[]
}

const day = {
    breakfast:{calories:0, list:[]},
    lunch:{calories:0, list:[]},
    dinner:{calories:0, list:[]},
    snacks:{calories:0, list:[]},
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
    switch(action.type){

        case 'add':
            return {
                ...state,
                [action.day]:{
                    ...state[action.day],
                    [action.time]: {
                        list:[...state[action.day][action.time].list, action.value],
                        calories: parseFloat(state[action.day][action.time].calories) + parseFloat(action.calories)
                    },
                    calories: parseFloat(state[action.day].calories) + parseFloat(action.calories)
                }
            }
        
        case 'remove':
            let list = [...state[action.day][action.time].list]
            let index = list.findIndex((m) => m._id === action._id)
            let obj = list.splice(index, 1)[0]
            let obj_cal = 0
            console.log(obj)
            if (obj.isMeal){
                obj_cal = get_calories_from_meal(obj)
            }
            else{
                obj_cal = get_calories_from_food(obj)
            }

            return {
                ...state,
                [action.day]:{
                    ...state[action.day],
                    [action.time]: {
                        list: list,
                        calories: parseFloat(state[action.day][action.time].calories) - obj_cal
                    },
                    calories: parseFloat(state[action.day].calories) - obj_cal
                }
            }

        case 'modify':
            console.log(action.obj)
            let edit_list = [...state[action.day][action.time].list]
            let indexx = edit_list.findIndex(obj => obj._id === action.obj._id)
            let calories = parseFloat(state[action.day][action.time].calories) - parseFloat(get_calories_from_food(edit_list[indexx]))
            let total_cal = parseFloat(state[action.day].calories) - parseFloat(get_calories_from_food(edit_list[indexx]))
            edit_list[indexx] = {
                ...edit_list[indexx],
                serving_size:{
                    ...edit_list[indexx].serving_size,
                    ...action.obj.serving_size
                },
                nutritional_facts:{
                    ...edit_list[indexx].nutritional_facts,
                    ...action.obj.nutritional_facts
                }
            }
            console.log(edit_list)
            calories += parseFloat(get_calories_from_food(edit_list[indexx]))
            total_cal += parseFloat(get_calories_from_food(edit_list[indexx]))

            return {
                ...state,
                [action.day]:{
                    ...state[action.day],
                    [action.time]:{
                        list:edit_list,
                        calories: calories
                    },
                    calories: total_cal
                }
            }

        default:
            return initial_state
    }
}