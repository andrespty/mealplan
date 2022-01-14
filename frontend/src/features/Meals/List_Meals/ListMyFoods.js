import React, { useContext, useState } from 'react'
import { Box, useDisclosure, Skeleton, Stack } from '@chakra-ui/react'
import FoodCard from '../../Cards/FoodCard'
import DraggableObject from '../../../utils/DraggableObject'
import { UserContext } from '../../../App'
import DrawerLayout from '../../../components/Drawer/DrawerLayout'
import FoodDetails from '../../Food/Food_Details/FoodDetails'
import SkeletonList from '../../../components/Loaders/SkeletonList'
import useListMyFoods from './useListMyFoods'
import { DragHandleIcon } from '@chakra-ui/icons'

function ListMyFoods() {

    console.log('LIST MY FOODS RENDER')

    const { user } = useContext(UserContext)
    const { list, save_edit, isLoading } = useListMyFoods(user._id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ editing, setEditing ] = useState({})

    const handle_click = (object) => {
        let unit = object.serving_size.serving_unit
        let number = object.serving_size.number_of_servings
        let serving = object.serving_size.serving
        setEditing({_id:object._id, unit:unit, number:number, serving:serving})
        onOpen()
    }
    const handle_save = (obj) => {
        save_edit(obj)
        onClose()
    }

    return (
        <React.Fragment>
        <Box>
            
            <SkeletonList isLoading={isLoading} nSkeleton={5} height={'50px'} />               
          
            <Skeleton isLoaded={!isLoading} fadeDuration={0.6} >
            {
                list.foods.map((food, key) => (
                    <DraggableObject onClick={()=>handle_click(food)} key={key} index={key} object={food} >
                        <FoodCard food={food} >
                            <DragHandleIcon cursor='move' />
                        </FoodCard>
                    </DraggableObject>
                ))
            }
            </Skeleton>
        </Box>
        

        <DrawerLayout isOpen={isOpen} onClose={onClose} header='Details' placement='left' size='md' >
            <FoodDetails editFood={editing} save_edit={handle_save} />
        </DrawerLayout>

        </React.Fragment>
    )
}

export default React.memo(ListMyFoods)
