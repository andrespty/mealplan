import React from 'react'
import { Box, Skeleton } from '@chakra-ui/react'
import DraggableObject from '../../../utils/DraggableObject'
import MealCard from '../../Cards/MealCard'
import useListMyMeals from './useListMyMeals'
import SkeletonList from '../../Loaders/SkeletonList'
import { DragHandleIcon } from '@chakra-ui/icons'

function ListMyMeals() {

    const { list, isLoading } = useListMyMeals()

    return (
        <Box>

            <SkeletonList isLoading={isLoading} nSkeleton={5} height={'70px'} />

            <Skeleton isLoaded={!isLoading} fadeDuration={0.6}   >
            {
                list.meals.map((meal, key) => (
                    <DraggableObject key={key} object={meal} index={key} >
                        <MealCard meal={meal}>
                            <DragHandleIcon cursor='move' />
                        </MealCard>
                    </DraggableObject>
                ))
            }
            </Skeleton>
        </Box>
    )
}

export default ListMyMeals
