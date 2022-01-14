import React from 'react'
import useMealDetails from './useMealDetails'
import WaitLoading from '../../../utils/WaitLoading'
import { Box, Heading, Text, Divider, Flex, Spacer, Center } from '@chakra-ui/react'
import Macros from '../../../components/Macros/Macros'
import ChartPie from '../../../components/Charts/ChartPie'

const colors = ['#0088FE', '#00C49F', '#FF8042']

function MealDetails({ mealID }) {

    const {info} = useMealDetails(mealID)

    return (
        <Box>
            <Flex direction={'row'} alignItems={'center'}>
                <Box>
                    <Heading>{info.name}</Heading>
                    <Text>{info.description}</Text>
                </Box>
            </Flex>

            <Divider/>

            <Box mt={5}>
                <Text fontSize='xl' align='center' lineHeight='1' >
                    {info.calories} Cal
                </Text>

                {/* <Center>
                    <ChartPie data={info.data} size={80} colors={colors} />
                </Center> */}
                
                {/* <Macros 
                    protein={info.nutritional_data.protein}
                    carbs={info.nutritional_data.total_carbohydrates}
                    fat={info.nutritional_data.total_fat}
                    colors={colors}
                /> */}
            </Box>
            
            <Flex>

            </Flex>

        </Box>
    )
}

export default MealDetails
