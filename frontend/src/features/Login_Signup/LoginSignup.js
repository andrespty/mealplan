import React from 'react'
import { Box, Heading, Center, Text, Link as SLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

function LoginSignup({ isLogIn }) {

    return (
        <Center>
        <Box w={{base:'90%', md:'60%'}} >
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

            {
                isLogIn
                ?   <Text align='center'>Don't have an account? <SLink as={Link} to='/signup'>Sign Up </SLink>here!</Text>
                :   <Text align='center'>Already have an account? <SLink as={Link} to='/login'>Log In </SLink>here!</Text>
            }

        </Box>
        </Center>
    )
}

export default LoginSignup
