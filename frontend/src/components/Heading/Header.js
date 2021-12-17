import React, { useContext } from 'react'
import { Flex, Heading, ButtonGroup, Button, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import WaitLoading from '../../utils/WaitLoading'

function Header() {

    let navigate = useNavigate()
    const { user } = useContext(UserContext)
    console.log("Header")
    console.log(user)
    return (
        <Flex bg='white' boxShadow={'md'} p={3} borderBottomRadius={10} alignItems='center'>

            <Heading color='primary.300' onClick={() => navigate('/')} cursor='pointer'>
                Meal Prep
            </Heading>

            <Spacer />

            <WaitLoading loading={user.isLoading}>
                {
                    user.isLoggedIn
                    ?   <Button>User</Button>
                    :
                        <ButtonGroup variant='ghost'>
                            <Button onClick={() => navigate('/login')} colorScheme={'primary'}>Log In</Button>
                            <Button onClick={() => navigate('/signup')} variant='primary'>Sign Up</Button>
                        </ButtonGroup>
                }
            </WaitLoading>
        </Flex>
    )
}

export default Header
