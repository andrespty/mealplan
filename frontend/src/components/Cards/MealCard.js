import React from 'react'
import { Box, Text, Flex, Spacer, Badge } from '@chakra-ui/react'
import { get_calories } from '../../utils/ConversionFunctions'

function MealCard({ meal, children }) {

    let calories = 0
    meal.recipe.forEach(food => {
        calories += get_calories({
            attr:           parseFloat(food.food.nutritional_facts.calories),
            og_n_serv:      parseFloat(food.food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.food.serving_size.serving),
            new_n_serv:     parseFloat(food.serving_size.number_of_servings),
            new_serv:       parseFloat(food.serving_size.serving),
            new_serv_unit:  food.serving_size.serving_unit,
            og_serv_unit:   food.food.serving_size.serving_unit,
        })
    })

    return (
        <Flex alignItems={'center'} maxW='sm' borderWidth='1px' borderRadius={5} m={2} py={2} px={2} >
            {children}
            <Box mx={2}>
            <Badge colorScheme={'primaryTabs'} >{meal.recipe.length} Ingredients</Badge>

            <Flex flexDir={'row'}>
                <Box>
                    <Text size='lg' fontWeight={'bold'}>{meal.name} </Text>
                    <Box fontSize='sm' color='gray.600' fontWeight={'light'} isTruncated>
                    {
                        meal.recipe.map((food, key) => (
                            <span key={key}>{food.food.name} &bull; </span>
                        ))
                    }
                    </Box>
                </Box>
                <Spacer/>
                <Text fontWeight={'medium'} >{calories.toFixed(1)}</Text>
            </Flex>
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