import axios from 'axios'
import { fetch_url } from '../../App'

export async function log_in_sign_up({isLogIn, body}){
    let fetch = isLogIn ? `${fetch_url}/users/login/` : `${fetch_url}/users/signup/`
    const response = await axios.post(fetch, body)

    return await response.data
}

export async function validate_refresh_user(){
    const response = await axios.post(`${fetch_url}/users/validation/`, {},{
        headers:{
            'x-access-token': localStorage.getItem('token')
        }
    })

    return await response.data
}
