import { useEffect, useState } from "react"
import { get_my_food } from "../../../utils/Fetch_Functions/Food"
import { search_array } from "../../../utils/UtilityFunctions"


const useListMyFood = (userID, selected_items) => {

    const [ state, setState ] = useState({
        list:[],
        loading:true,
        search:[],
        selected:selected_items
    })

    useEffect(() => {
        get_my_food({userID: userID})
        .then(json => {
            console.log(json.data)
            setState(prev => ({
                ...prev,
                list:json.data,
                search:json.data,
                loading:false
            }))
        })
    }, [])

    const handle_search = (e) => {
        let search_list = [...state.list]
        setState(prev => ({
            ...prev,
            search: search_array(e.target.value, search_list)
        }))
    }

    const save_edit = (food) => {
        let edit_list = [...state.list]
        let index = state.list.findIndex(obj => obj._id === food._id)
        edit_list[index] = {
            ...edit_list[index],
            serving_size:{
                ...edit_list[index].serving_size,
                ...food.serving_size
            },
            nutritional_facts:{
                ...edit_list[index].nutritional_facts,
                ...food.nutritional_facts
            }
        }
        setState(prev => ({
            ...prev,
            list: edit_list
        }))
    }

    const handle_select = (data) => {
        let add = !state.selected.includes(data)
        if (add){
            setState(prev => ({
                ...prev,
                selected: [...prev.selected, data]
            }))    
        }
        else{
            setState(prev => ({
                ...prev,
                selected: prev.selected.filter(obj => obj !== data)
            }))
        }
    }


    return { state, handle_search, setState, handle_select, save_edit }
}

export default useListMyFood