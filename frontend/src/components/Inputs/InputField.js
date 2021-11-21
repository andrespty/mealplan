import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'

function InputField({ label, isRequired, isInvalid, children }) {
    return (
        <FormControl isRequired={isRequired} isInvalid={isInvalid}>
            <FormLabel my={0}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}

export default InputField
