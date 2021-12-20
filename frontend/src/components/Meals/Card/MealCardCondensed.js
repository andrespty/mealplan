import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { get_calories } from '../../../utils/ConversionFunctions'

function MealCardCondensed({ meal }) {
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
        <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} _hover={{opacity:0.5}} cursor={'pointer'} >
            <Flex flexDir={'row'} justifyContent={'space-between'} >
                <Text fontSize='xs' fontWeight={'bold'} isTruncated >{meal.name}</Text>
                <Text textAlign={'right'} fontSize='xs' fontWeight={'medium'} >{calories.toFixed(0)}</Text>
            </Flex>
        </Box>
    )
}

export default MealCardCondensed
