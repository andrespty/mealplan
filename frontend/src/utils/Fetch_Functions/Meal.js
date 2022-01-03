import axios from "axios";
import { fetch_url } from "../../App";

export async function create_meal({ body }){
    const response = await axios.post(`${fetch_url}/meals/`, body, {
        headers:{
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        }
    })
    return await response.data
}

export async function get_my_meals_list({ id }){

    const response = await axios.get(`${fetch_url}/meals/user/${id}`)

    return await response.data
}

export async function get_meal({id}){
    const response = await axios.get(`${fetch_url}/meals/${id}`)

    return await response.data
}