import { useEffect, useState } from "react"
import { get_my_food } from "../../../utils/FetchFunctions"
import { search_array } from "../../../utils/UtilityFunctions"
const useListMyFood = (userID) => {

    const [ list, setList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ search, setSearch ] = useState([])

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

    return { search, loading, handle_search }
}

export default useListMyFood