import React from 'react'
import { Box } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'

function FoodDetails({ foodID }) {

    useFoodDetails(foodID)

    return (
        <Box>
            
        </Box>
    )
}

export default FoodDetails
