import React from 'react'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchFood() {
    return (
        <Box>
            <SearchInput />

            Search Food
        </Box>
    )
}

export default SearchFood

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<SearchIcon />}  />
            <Input placeholder='Search food'/>
        </InputGroup>
    )
}