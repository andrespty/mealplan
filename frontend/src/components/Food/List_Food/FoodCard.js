import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

function FoodCard({ food }) {

    console.log(food)

    return (
        <Box>

            <Heading size='md' >{food.name}</Heading>
            <Text>{food.description}</Text>
            
        </Box>
    )
}

export default React.memo(FoodCard)
