import React from 'react'
import { Box, Text, Spacer, IconButton, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { get_calories } from '../../utils/ConversionFunctions'
import BoardCardCondensed from '../Cards/BoardCardCondensed'

import { Droppable } from 'react-beautiful-dnd'

function MealTimeBoard( { time, day, list, remove }) {

    console.log(`Rendering: ${time} ${day}`)

    return (
        <Droppable droppableId={`${time.toLowerCase()}_${day}`} >
        {
            (provided) => (
                <Box minH={100} p={1} {...provided.droppableProps} ref={provided.innerRef}>
                    <Flex>
                        <Text fontSize='sm'>{time}</Text>
                        <Spacer />

                        <Text display={{sm:'none', lg:'inherit'}} >Cal</Text>
                        <IconButton display={{sm:'inherit', lg:'none'}} size='xs' variant='ghost' icon={<AddIcon />} />
                        
                    </Flex>
                    
                    {
                        list.map((meal, key) => {
                            if (meal.hasOwnProperty('recipe')){
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
                                return <BoardCardCondensed time={time.toLowerCase()} day={day} meal={meal} calories={calories.toFixed(0)} key={key} remove={remove} />
                            }
                            else {
                                return <BoardCardCondensed time={time.toLowerCase()} day={day} food={meal} calories={meal.nutritional_facts.calories} key={key} remove={remove} />
                            }
                        })
                    }
                        
                </Box>
            )
        }
        </Droppable>
    )
}

export default React.memo(MealTimeBoard)
