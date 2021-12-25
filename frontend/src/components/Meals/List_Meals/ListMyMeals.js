import React from 'react'
import { Box, Skeleton } from '@chakra-ui/react'
import DraggableObject from '../../../utils/DraggableObject'
import MealCard from '../../Cards/MealCard'
import useListMyMeals from './useListMyMeals'

function ListMyMeals() {

    const { list, isLoading } = useListMyMeals()

    return (
        <Box>
            <Skeleton isLoaded={!isLoading} height={20}  >
            {
                list.meals.map((meal, key) => (
                    <DraggableObject key={key} object={meal} index={key} >
                        <MealCard meal={meal} />
                    </DraggableObject>
                ))
            }
            </Skeleton>
        </Box>
    )
}

export default ListMyMeals
