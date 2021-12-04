import React from 'react'
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'
import WaitLoading from '../../../utils/WaitLoading'

function FoodDetails({ foodID }) {

    const { info } = useFoodDetails(foodID)

    return (
        <WaitLoading loading={info.isLoading}>
            <Box>
                <Heading >{info.food.name}</Heading>
                <Text>{info.food.description}</Text>
                <Divider />
            </Box>

            <Box>
                <Text>{info.food.nutritional_facts.calories}</Text>
                {/* <PieChart data={info.data} /> */}
            </Box>
        </WaitLoading>
    )
}

export default FoodDetails
