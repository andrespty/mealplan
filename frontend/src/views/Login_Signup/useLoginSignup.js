import { useReducer, useContext, useState } from "react"
import { UserContext } from "../../App"
import { CheckPasswordsAreSame, CheckPassword } from "../../utils/UtilityFunctions"
import { log_in_sign_up } from "../../utils/FetchFunctions"
import { useNavigate } from "react-router"

const useLoginSignup = (isLogIn) => {
    const [ info, setInfo ] = useReducer(reducer, isLogIn ? initial_log_in : initial_sign_up)
    const [ error, setError ] = useReducer(reducer, initial_error)
    const [ loading, setLoading ] = useState(false)
    const { setUser } = useContext(UserContext)
    let navigate = useNavigate()

    const modify = (value) => setInfo(value)

    const submit = (e) => {
        e.preventDefault()
        setError(initial_error)
        let hasError = false
        if (!isLogIn){
            if (!CheckPassword(info.password)){
                setError({message:'Password must be between 6 - 20 characters long, and contain at least one numeric digit and one non-numeric digit.',password:true})
                hasError=true
            }
            if (!CheckPasswordsAreSame(info.password, info.password2)){
                setError({
                    message:'Passwords must match',
                    password:true,
                    password2:true
                })
                hasError = true
            }
        }
        if (!hasError){
            setLoading(true)
            log_in_sign_up({isLogIn:isLogIn, body: info})
            .then(res => {
                if (res.success){
                    console.log('success')
                    localStorage.setItem('token', res.token)
                    setUser({type:'login', user:res.user})
                    navigate('/')
                }
                else{
                    // Error
                    console.log('Failed')
                    setError({message:res.message, [res.field]:true})
                    setLoading(false)
                }
            })
            .catch(error => console.log(error))
        }
    }

    return { info, modify, submit, error, loading }
}

const initial_log_in = {
    email:'',
    password:''
}

const initial_sign_up = {
    first_name:'',
    last_name:'',
    username:'',
    email:'',
    password:'',
    password2:''
}

const initial_error = {
    message:'',
    username:false,
    email:false,
    password:false
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export default useLoginSignup