import { useReducer, useState } from "react"

const useMealPrep = () => {
    const [ week, setWeek ] = useReducer(reducer, initial_state)
    const [ list, setList ] = useState(initial_list)

    const handle_drag = (obj)=> {
        if ( !obj.destination){ return }
        if ( obj.destination.droppableId === 'menu'){ return }
        const {index:indexSource} = obj.source
        const { droppableId:time_day } = obj.destination
        let time = time_day.split('_')[0]
        let day = time_day.split('_')[1]
        let attribute = Object.keys(list).map((name, key) => {
            if (list[name].length > 0){
                return name
            }
            else{
                return ''
            }
        })
        attribute = attribute.filter(att => att !== '')[0]
        let value = list[attribute][indexSource]
        setWeek({day:day, time:time, value:value})
    }

    return { week, setWeek, list, setList, handle_drag}
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
    snacks:[]
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
            [action.time]: [...state[action.day][action.time], action.value]
        }
    }
}