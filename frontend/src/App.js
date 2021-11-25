import React, { createContext } from 'react'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MealPrep from './views/Meal_Prep/MealPrep'
import Header from './components/Heading/Header'
import useUser from './utils/useUser'
import LoginSignup from './views/Login_Signup/LoginSignup'

export const fetch_url = 'http://localhost:5000'

function App() {

    const { user, setUser } = useUser()

    return (
        <Box>
            <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/login' element={<LoginSignup isLogIn={true} />} />
                    <Route path='/signup' element={<LoginSignup isLogIn={false} />} />
                    <Route path='/' element={<MealPrep />} />
                </Routes>
            </BrowserRouter>
            </UserContext.Provider>
        </Box>
    )
}

export default App
export const UserContext = createContext()