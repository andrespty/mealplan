import React from 'react'
import { Box, Text, Flex, Spacer, Badge } from '@chakra-ui/react'
import { get_calories_from_meal, get_macros_from_meal } from '../../utils/ConversionFunctions'

function MealCard({ meal, children }) {

    let calories = get_calories_from_meal(meal)
    const { protein, fat, carbs } = get_macros_from_meal(meal)

    return (
        <Flex alignItems={'center'} maxW='sm' borderWidth='1px' borderRadius={5} m={2} py={2} px={2}  >
            {children}
            <Box mx={2}>
            
                <Badge colorScheme={'primaryTabs'} >{meal.recipe.length} Ingredients</Badge>

            
                <Box maxW={'250px'}>
                    <Flex flexDir={'row'}>
                        <Text size='lg' fontWeight={'bold'}>{meal.name} </Text>
                        <Spacer/>
                        <Text fontWeight={'medium'} >{calories.toFixed(1)}</Text>
                    </Flex>
                    <Box fontSize='sm' color='gray.600' fontWeight={'light'} isTruncated>
            
                        <span>{protein.toFixed(0)}g protein &bull; </span>
                        <span>{fat.toFixed(0)}g fat &bull; </span>
                        <span>{carbs.toFixed(0)}g carbs </span>
                       
                    </Box>
                </Box>
                
            </Box>
        </Flex>
    )
}

export default React.memo(MealCard)


// creator: "61985a8c39d3c84eb6a70a2a"
// description: "This is the second meal"
// name: "Second Meal"
// recipe: (2) [{…}, {…}]
// _id: "61bbc8ea2013d05998625f71"


// recipe 
// food: {serving_size: {…}, nutritional_facts: {…}, _id: '61ad404529788c6eb016a72c', name: 'Almonds', description: 'Almonds', …}
// serving_size: {number_of_servings: '0.3', serving: '1', serving_unit: 'lb'}
// _id: "61bbc9df2013d05998625f84"