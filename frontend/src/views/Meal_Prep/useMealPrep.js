import { useReducer } from "react"

const useMealPrep = () => {
    const [ week, setWeek ] = useReducer(reducer, initial_state)

    return { week, setWeek}
}

export default useMealPrep

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