import { useReducer } from "react"

const useMealPrep = () => {
    const [ info, setInfo ] = useReducer()

    return { info, setInfo}
}

export default useMealPrep