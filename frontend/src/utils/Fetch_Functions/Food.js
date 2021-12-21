import axios from "axios";
import { fetch_url } from "../../App";

export async function create_food({ body }){
    const response = await axios.post(`${fetch_url}/foods/`, body)

    return await response.data
}

export async function get_my_food({ userID }){
    const response = await axios.get(`${fetch_url}/foods/users/${userID}`)

    return await response.data
}

export async function get_food_details({ foodID }){
    const response = await axios.get(`${fetch_url}/foods/${foodID}`)

    return await response.data
}