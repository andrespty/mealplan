import React from 'react'
import { Box, Input, Button, Collapse, Alert, AlertIcon, AlertDescription, Center } from '@chakra-ui/react'
import InputField from '../../components/Inputs/InputField'
import useLoginSignup from './useLoginSignup'

function SignUpForm({ isLogIn }) {

    const { info, modify, submit, error, loading } = useLoginSignup(isLogIn)

    return (
        <Box>

            <Collapse in={error.message !== ''} >
                <Alert status='error' borderRadius={5}>
                    <AlertIcon/>
                    <AlertDescription>
                        {error.message}
                    </AlertDescription>
                </Alert>
            </Collapse>


            <form onSubmit={submit}>
                <InputField isRequired={true} label='First Name' mt={3}>
                    <Input placeholder='First Name' value={info.first_name} onChange={e => modify({first_name:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Last Name' mt={3}>
                    <Input placeholder='Last Name' value={info.last_name} onChange={e => modify({last_name:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Username' mt={3}>
                    <Input placeholder='Username' value={info.username} onChange={e => modify({username:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Email' mt={3}>
                    <Input placeholder='Email' value={info.email} onChange={e => modify({email:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Password' isInvalid={error.password} mt={3}>
                    <Input placeholder='Password' value={info.password} onChange={e => modify({password:e.target.value})} type='password' />
                </InputField>

                <InputField isRequired={true} label='Confirm Password' isInvalid={error.password2} mt={3}>
                    <Input placeholder='Password' value={info.password2} onChange={e => modify({password2:e.target.value})} type='password'/>
                </InputField>

                <Center>
                    <Button type='submit' isLoading={loading} mt={3} isFullWidth w='50%' colorScheme='green'>
                        Sign Up
                    </Button>
                </Center>
            </form>
        </Box>
    )
}

export default SignUpForm
