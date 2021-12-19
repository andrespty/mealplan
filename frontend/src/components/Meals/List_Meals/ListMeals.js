import React from 'react'
import { Box } from '@chakra-ui/react'
import useListMeals from './useListMeals'
import MealCard from '../Card/MealCard'
import DraggableObject from '../../../utils/DraggableObject'

function ListMeals() {

    const { meals } = useListMeals()

    return (
        <Box>
            {
                meals.map((meal, key) => (
                    <DraggableObject key={key} _id={meal._id} >
                        <MealCard meal={meal} />
                    </DraggableObject>
                ))
            }
        </Box>
    )
}

export default React.memo(ListMeals)
