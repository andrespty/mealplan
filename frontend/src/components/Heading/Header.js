import React from 'react'
import { Flex, Heading, ButtonGroup, Button, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Header() {

    let navigate = useNavigate()

    return (
        <Flex bg='green.500' p={3} borderBottomRadius={10} alignItems='center'>

            <Heading color='white' onClick={() => navigate('/')} cursor='pointer'>
                Meal Prep
            </Heading>

            <Spacer />

            <ButtonGroup variant='ghost'>
                <Button onClick={() => navigate('/login')} >Log In</Button>
                <Button onClick={() => navigate('/signup')}>Sign Up</Button>
            </ButtonGroup>

        </Flex>
    )
}

export default Header
