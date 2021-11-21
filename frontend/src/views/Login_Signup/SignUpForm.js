import React from 'react'
import { Box, Input, Button, Collapse } from '@chakra-ui/react'
import InputField from '../../components/Inputs/InputField'
import useLoginSignup from './useLoginSignup'

function SignUpForm({ isLogIn }) {

    const { info, modify, submit, error, loading } = useLoginSignup(isLogIn)

    return (
        <Box>

            <Collapse in={error.message !== ''} >
                {error.message}
            </Collapse>


            <form onSubmit={submit}>
                <InputField isRequired={true} label='First Name' >
                    <Input placeholder='First Name' value={info.first_name} onChange={e => modify({first_name:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Last Name' >
                    <Input placeholder='Last Name' value={info.last_name} onChange={e => modify({last_name:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Username' >
                    <Input placeholder='Username' value={info.username} onChange={e => modify({username:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Email' >
                    <Input placeholder='Email' value={info.email} onChange={e => modify({email:e.target.value})} />
                </InputField>

                <InputField isRequired={true} label='Password' isInvalid={error.password}>
                    <Input placeholder='Password' value={info.password} onChange={e => modify({password:e.target.value})} type='password' />
                </InputField>

                <InputField isRequired={true} label='Confirm Password' isInvalid={error.password2}>
                    <Input placeholder='Password' value={info.password2} onChange={e => modify({password2:e.target.value})} type='password'/>
                </InputField>

                <Button type='submit' isLoading={loading} >Sign Up</Button>
            </form>
        </Box>
    )
}

export default SignUpForm
