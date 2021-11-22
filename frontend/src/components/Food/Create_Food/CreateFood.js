import React from 'react'
import useCreateFood from './useCreateFood'
import { Box } from '@chakra-ui/react'

function CreateFood() {

    const { info } = useCreateFood()

    return (
        <Box>
            Create food
        </Box>
    )
}

export default CreateFood
