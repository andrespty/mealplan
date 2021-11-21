import React from 'react'
import { Box, Input, Button, Collapse } from '@chakra-ui/react'
import InputField from '../../components/Inputs/InputField'
import useLoginSignup from './useLoginSignup'

function LogInForm({ isLogIn }) {

    const { info, modify, submit, error, loading } = useLoginSignup(isLogIn)

    return (
        <Box>
            <Collapse in={error.message !== ''}>
                {error.message}
            </Collapse>

            <form onSubmit={submit}>
                <InputField isRequired={true} label='Email' isInvalid={error.email}>
                    <Input placeholder='Email' value={info.email} onChange={e => modify({email:e.target.value})} />
                </InputField>
                
                <InputField isRequired={true} label='Password' isInvalid={error.password} >
                    <Input placeholder='Password' type='password' onChange={e => modify({password:e.target.value})} />
                </InputField>

                <Button type='submit' isLoading={loading}>Log In</Button>
            </form>
        </Box>
    )
}

export default LogInForm
