import React from 'react'
import { Box, Input, Button, Collapse, Alert, AlertIcon, AlertDescription, Center } from '@chakra-ui/react'
import InputField from '../../components/Inputs/InputField'
import useLoginSignup from './useLoginSignup'

function LogInForm({ isLogIn }) {

    const { info, modify, submit, error, loading } = useLoginSignup(isLogIn)

    return (
        <Box>
            <Collapse in={error.message !== ''}>
                <Alert status='error' borderRadius={5}>
                    <AlertIcon/>
                    <AlertDescription>
                        {error.message}
                    </AlertDescription>
                </Alert>
            </Collapse>

            <form onSubmit={submit}>
                <InputField isRequired={true} label='Email' isInvalid={error.email} mt={3} >
                    <Input placeholder='Email' value={info.email} onChange={e => modify({email:e.target.value})} />
                </InputField>
                
                <InputField isRequired={true} label='Password' isInvalid={error.password} mt={3}>
                    <Input placeholder='Password' type='password' onChange={e => modify({password:e.target.value})} />
                </InputField>

                <Center>
                    <Button type='submit' isLoading={loading} mt={3} isFullWidth w='50%' variant='solid' colorScheme='green' >
                        Log In
                    </Button>
                </Center>
            </form>
        </Box>
    )
}

export default LogInForm
