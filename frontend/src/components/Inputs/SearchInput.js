import React from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'

function SearchInput({ placeholder, onChange }) {
    return (
        <InputGroup>
            
            <InputLeftElement children={<SearchIcon />} />
            <Input placeholder={placeholder} onChange={onChange} />

        </InputGroup>
    )
}

export default SearchInput
