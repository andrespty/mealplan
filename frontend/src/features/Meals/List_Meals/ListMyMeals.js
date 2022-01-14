import React, { useState } from 'react'
import { Box, Skeleton, useDisclosure } from '@chakra-ui/react'
import DraggableObject from '../../../utils/DraggableObject'
import MealCard from '../../Cards/MealCard'
import useListMyMeals from './useListMyMeals'
import SkeletonList from '../../../components/Loaders/SkeletonList'
import { DragHandleIcon } from '@chakra-ui/icons'
import DrawerLayout from '../../../components/Drawer/DrawerLayout'
import MealDetails from '../Meal_Details/MealDetails'

function ListMyMeals() {

    const { list, isLoading } = useListMyMeals()

    const { onOpen, onClose, isOpen } = useDisclosure()
    const [ selected, setSelected ] = useState(0)

    const handle_click = (obj) => {
        setSelected(obj._id)
        onOpen()
    }

    return (
        <Box>

            <SkeletonList isLoading={isLoading} nSkeleton={5} height={'70px'} />

            <Skeleton isLoaded={!isLoading} fadeDuration={0.6}   >
            {
                list.meals.map((meal, key) => (
                    <DraggableObject key={key} object={meal} index={key} onClick={()=>handle_click(meal)} >
                        <MealCard meal={meal}>
                            <DragHandleIcon cursor='move' />
                        </MealCard>
                    </DraggableObject>
                ))
            }
            </Skeleton>

            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Details' placement='left' size='md'>
                <MealDetails mealID={selected} />
            </DrawerLayout>            

        </Box>
    )
}

export default ListMyMeals