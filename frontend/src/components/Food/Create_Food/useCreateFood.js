import { useReducer } from "react"

const useCreateFood = () => {
    
    const [ info, setInfo ] = useReducer()

    return { info }
}

export default useCreateFood