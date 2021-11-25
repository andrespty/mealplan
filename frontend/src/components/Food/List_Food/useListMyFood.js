import { useEffect, useState } from "react"
import { get_my_food } from "../../../utils/FetchFunctions"
import { search_array } from "../../../utils/UtilityFunctions"
const useListMyFood = (userID) => {

    const [ list, setList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ search, setSearch ] = useState([])
    const [ selected, setSelected ] = useState([])

    useEffect(() => {
        setLoading(true)
        get_my_food({userID: userID})
        .then(json => {
            console.log(json.data)
            setList(json.data)
            setSearch(json.data)
            setLoading(false)
        })
    }, [])

    const handle_search = (e) => {
        let search_list = [...list]
        setSearch(search_array(e.target.value, search_list))
    }

    const handle_selection = (data) => {
        
        if (typeof(data) === 'string'){
            setSelected(state => state.filter(obj => obj._id !== data))
        }
        else{
            
            setSelected(state => [...state, data])
        }
    }

    return { search, loading, handle_search, selected, handle_selection }
}

export default useListMyFood