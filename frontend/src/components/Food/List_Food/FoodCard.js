import React from 'react'
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'

function FoodCard({ food, handle_select, children }) {

    const handle_click = () => {
        if (handle_select){
            handle_select(food._id)
        }
    }

    return (
        <Box my={2} p={1} borderWidth="1px" borderRadius={5} cursor='pointer' onClick={handle_click} >

                
            <Flex w='100%'  alignItems='center' px={2} >
                {children}
                <Box mx={3}>
                    <Text size='lg' fontWeight='bold' >{food.name}</Text>
                    <Text fontSize='sm' color='gray.600' fontWeight='light' isTruncated >
                        {food.description}
                    </Text>
                </Box>

                <Spacer />

                <Box>
                    <Text fontWeight='medium' align='right'>
                        {food.nutritional_facts.calories}
                    </Text>
                    <Text fontWeight='light' align='right' fontSize='sm' >
                        {food.serving_size.serving} {food.serving_size.serving_unit}
                    </Text>
                </Box>
                
            </Flex>

            
        </Box>
    )
}

export default FoodCard
