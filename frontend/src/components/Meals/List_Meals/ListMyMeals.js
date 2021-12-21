import React from 'react'
import { Box } from '@chakra-ui/react'
import DraggableObject from '../../../utils/DraggableObject'
import MealCard from '../Card/MealCard'
import useListMyMeals from './useListMyMeals'

function ListMyMeals() {

    const { meals } = useListMyMeals()

    return (
        <Box>

            {
                meals.map((meal, key) => (
                    <DraggableObject key={key} object={meal} >
                        <MealCard meal={meal} />
                    </DraggableObject>
                ))
            }
            
        </Box>
    )
}

export default ListMyMeals
