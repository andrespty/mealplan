import { useReducer } from 'react'

const useCreateMeal = () => {
    const [ info, setInfo ] = useReducer()

    return { info, setInfo }
}

export default useCreateMeal