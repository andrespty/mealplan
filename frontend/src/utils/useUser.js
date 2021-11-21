import { useReducer, useEffect } from "react"

const useUser = () => {
    
    const [ user, setUser ] = useReducer(reducer, initial_user)

    useEffect(() => {
        if (localStorage.getItem('token')){
            console.log('Must fetch user')
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
    isLoggedIn: false
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