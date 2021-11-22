import React from 'react'
import { Flex, Heading, ButtonGroup, Button, Spacer } from '@chakra-ui/react'

function Header() {
    return (
        <Flex bg='green.500' p={3} borderBottomRadius={10} alignItems='center'>

            <Heading color='white'>Meal Prep</Heading>

            <Spacer />

            <ButtonGroup variant='ghost'>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </ButtonGroup>

        </Flex>
    )
}

export default Header
