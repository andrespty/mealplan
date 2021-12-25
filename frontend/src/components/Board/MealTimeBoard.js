import React, { useContext } from 'react'
import { MealPrepContext } from '../../views/Meal_Prep/MealPrep'
import { Box, Text, Spacer, IconButton, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { get_calories } from '../../utils/ConversionFunctions'
import BoardCardCondensed from '../Cards/BoardCardCondensed'

import { Droppable } from 'react-beautiful-dnd'
// import { useDrop } from 'react-dnd'

function MealTimeBoard( { time, day }) {

    const { week, setWeek }  = useContext(MealPrepContext)

    // const [{isOver}, drop ] = useDrop(() => ({
    //     accept:'object',
    //     drop:(item) => dropObject(item),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //       }),
    // }))

    // const dropObject = (object) => {
    //     setWeek({
    //         day:day, 
    //         time: time.toLowerCase(),
    //         value:object
    //     })
    // }


    return (
        // <Box minH={100} p={1} ref={drop} style={{opacity: isOver ? 0.5 : 1}}>
        <Droppable droppableId={`${time.toLowerCase()}_${day}`} >
        {
            (provided) => (
                <Box minH={100} p={1} {...provided.droppableProps} ref={provided.innerRef}>
                    <Flex>
                        <Text fontSize='sm'>{time}</Text>
                        <Spacer />
                        <IconButton size='xs' variant='ghost' icon={<AddIcon />} />
                    </Flex>
                    
                    {
                        week[day][time.toLowerCase()].map((meal, key) => {
                            console.log(meal)
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
                                return <BoardCardCondensed meal={meal} calories={calories.toFixed(0)} key={key} />
                            }
                            else {
                                return <BoardCardCondensed food={meal} calories={meal.nutritional_facts.calories} key={key} />
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
