import React from 'react'
import { Box, Text, Spacer, IconButton, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { get_calories_from_meal } from '../../utils/ConversionFunctions'
import BoardCardCondensed from '../../features/Meal_Prep/BoardCardCondensed'

import { Droppable } from 'react-beautiful-dnd'

function MealTimeBoard( { time, day, meal, remove, save }) {

    console.log(`Rendering: ${time} ${day}`)
    console.log(meal)

    return (
        <Droppable droppableId={`${time.toLowerCase()}_${day}`} >
        {
            (provided) => (
                <Box minH={100} p={1} {...provided.droppableProps} ref={provided.innerRef}>
                    <Flex>
                        <Text fontSize='sm'>{time}</Text>
                        <Spacer />

                        <Text display={{sm:'none', lg:'inherit'}} fontWeight={'semibold'} >{meal.calories.toFixed(0)}</Text>
                        <IconButton display={{sm:'inherit', lg:'none'}} size='xs' variant='ghost' icon={<AddIcon />} />
                        
                    </Flex>
                    
                    {
                        meal.list.map((meal, key) => {
                            if (meal.hasOwnProperty('recipe')){
                                let calories = get_calories_from_meal(meal)
                                return <BoardCardCondensed time={time.toLowerCase()} day={day} meal={meal} calories={calories.toFixed(0)} key={key} remove={remove} save={save} />
                            }
                            else {
                                return <BoardCardCondensed time={time.toLowerCase()} day={day} meal={meal} calories={meal.nutritional_facts.calories} key={key} remove={remove} save={save} />
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
