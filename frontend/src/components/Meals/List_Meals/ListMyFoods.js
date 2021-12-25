import React, { useContext, useState } from 'react'
import { Box, useDisclosure, Skeleton, Stack } from '@chakra-ui/react'
import FoodCard from '../../Cards/FoodCard'
import DraggableObject from '../../../utils/DraggableObject'
import { UserContext } from '../../../App'
import DrawerLayout from '../../Drawer/DrawerLayout'
import FoodDetails from '../../Food/Food_Details/FoodDetails'

import useListMyFoods from './useListMyFoods'

function ListMyFoods() {

    console.log('LIST MY FOODS RENDER')

    const { user } = useContext(UserContext)
    const { list, save_edit, isLoading } = useListMyFoods(user._id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ editing, setEditing ] = useState({})

    const handle_click = (object) => {
        let unit = object.serving_size.serving_unit
        let number = object.serving_size.number_of_servings
        setEditing({_id:object._id, unit:unit, number:number})
        onOpen()
    }
    const handle_save = (obj) => {
        save_edit(obj)
        onClose()
    }

    return (
        <React.Fragment>
        <Box>
            
            {
                !isLoading 
                ?list.foods.map((food, key) => (
                    <DraggableObject onClick={()=>handle_click(food)} key={key} index={key} object={food} >
                        <FoodCard food={food} />
                    </DraggableObject>
                ))
                :<Stack>
                    {
                        Array(3).fill(0).map((x, key) => (
                            <Skeleton key={key} height='30px' />
                        ))
                    }
                </Stack>
            }
            
        </Box>
        

        <DrawerLayout isOpen={isOpen} onClose={onClose} header='Details' placement='left' size='md' >
            <FoodDetails editFood={editing} save_edit={handle_save} />
        </DrawerLayout>

        </React.Fragment>
    )
}

export default ListMyFoods
