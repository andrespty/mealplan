import { useReducer, useEffect } from "react"
import { validate_refresh_user } from "./Fetch_Functions/LoginSignUp"

const useUser = () => {
    
    const [ user, setUser ] = useReducer(reducer, initial_user)

    useEffect(() => {
        if (localStorage.getItem('token')){
            setUser({type:'login', user:{isLoading:true}})
            validate_refresh_user()
            .then(res => {
                console.log(res)
                if (res.success){
                    localStorage.setItem('token', res.token)
                    setUser({type:'login', user:{...res.user, isLoading:false, isLoggedIn:true}})
                }
                else{
                    setUser({type:'logout'})
                }
            })
        }
    }, [])

    return { user, setUser }
}

const initial_user = {
    _id:0,
    first_name:'',
    last_name:'',
    username:'',
    email:'',
    isLoggedIn: false,
    isLoading:false
}

const reducer = (state, action) => {
    switch(action.type){

        case 'logout':
            localStorage.clear()
            return initial_user

        case 'login':
            return {...state, ...action.user}

        default:
            return initial_user
    }
}

export default useUser