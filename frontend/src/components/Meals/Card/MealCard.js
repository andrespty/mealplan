import React from 'react'
import { Box, Text, Flex, Spacer, Badge } from '@chakra-ui/react'
const convert = require('convert-units')

function MealCard({ meal }) {

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
        <Box maxW='sm' borderWidth='1px' borderRadius={5} m={2} px={3} py={2} >

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

            {/* {
                meal.recipe.map((food, key) => (
                    <Text key={key} >{food.food.name}</Text>
                ))
            } */}

        </Box>
    )
}

export default React.memo(MealCard)

const get_calories = ({ attr, og_serv_unit, new_serv_unit, og_n_serv, new_n_serv, og_serv, new_serv }) => {
    let n_servings_ratio = new_n_serv / og_n_serv
    let servings_ratio = new_serv / og_serv
    let conversion = convert(1).from(new_serv_unit).to(og_serv_unit)

    return (attr * n_servings_ratio * servings_ratio * conversion)
}

// creator: "61985a8c39d3c84eb6a70a2a"
// description: "This is the second meal"
// name: "Second Meal"
// recipe: (2) [{…}, {…}]
// _id: "61bbc8ea2013d05998625f71"


// recipe 
// food: {serving_size: {…}, nutritional_facts: {…}, _id: '61ad404529788c6eb016a72c', name: 'Almonds', description: 'Almonds', …}
// serving_size: {number_of_servings: '0.3', serving: '1', serving_unit: 'lb'}
// _id: "61bbc9df2013d05998625f84"