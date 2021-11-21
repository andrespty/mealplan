import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'

function InputField({ label, isRequired, isInvalid, children, ...props }) {
    return (
        <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
            <FormLabel my={0}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}

export default InputField
