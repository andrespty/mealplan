import React, { useContext } from 'react'
import { UserContext } from '../App'
import { Button, Center, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function NeedsLogIn({ children }) {

    const { user } = useContext(UserContext)
    let navigate = useNavigate()

    const redirect = () => {
        navigate('/login')
    }

    if (user._id !== 0){
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
    else{
        return (
            <Center h='50vh'>
                <Stack>
                    <Text>Please Log In</Text>
                    <Button colorScheme='green' onClick={redirect} >Log In</Button>
                </Stack>
            </Center>
        )
    }

}

export default NeedsLogIn
