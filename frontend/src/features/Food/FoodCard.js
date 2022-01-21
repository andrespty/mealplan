 import React from 'react'
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'
import DataHandler from '../../containers/DataHandler'

function FoodDisplay({ food }) {

    const { name, description, calories, serving_size } = food

    return (
        <>       
            <Flex w='100%'  alignItems='center' px={2} >

                <Box mx={2}>
                    <Text size='lg' fontWeight='bold' >{name}</Text>
                    <Text fontSize='sm' color='gray.600' fontWeight='light' isTruncated >
                        {description}
                    </Text>
                </Box>

                <Spacer />

                <Box>
                    <Text fontWeight='medium' align='right'>
                        {calories}
                    </Text>
                    <Text fontWeight='light' align='right' fontSize='sm' >
                        {serving_size}
                    </Text>
                </Box>
                
            </Flex>
        </>
    )
}

const FoodCard = ({ ...props }) => {
    return (
        <DataHandler resourceName={'food'} {...props} >
            <FoodDisplay />
        </DataHandler>
    )
}

export default FoodCard
