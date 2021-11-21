import React from 'react'
import { Box, Heading, Center } from '@chakra-ui/react'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

function LoginSignup({ isLogIn }) {

    return (
        <Center>
        <Box bg='green' w={{base:'90%', md:'60%'}} >
            {
                isLogIn
                ?   <Heading align='center'>Log In</Heading>
                :   <Heading align='center'>Sign Up</Heading>
            }
            {
                isLogIn
                ?   <LogInForm isLogIn={isLogIn} />
                :   <SignUpForm isLogIn={isLogIn} />
            }
        </Box>
        </Center>
    )
}

export default LoginSignup
