import React, { useContext, useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import useListMyFood from '../../Food/List_Food/useListMyFood'
import FoodCard from '../../Cards/FoodCard'
import DraggableObject from '../../../utils/DraggableObject'
import { UserContext } from '../../../App'
import DrawerLayout from '../../Drawer/DrawerLayout'
import FoodDetails from '../../Food/Food_Details/FoodDetails'

function ListMyFoods() {

    const { user } = useContext(UserContext)
    const { state, save_edit } = useListMyFood(user._id, [])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ editing, setEditing ] = useState({})

    const handle_click = (object) => {
        let unit = object.serving_size.serving_unit
        let number = object.serving_size.number_of_servings
        setEditing({_id:object._id, unit:unit, number:number})
        onOpen()
    }
    const handle_save = (obj) => {
        onClose()
        save_edit(obj)
    }

    return (
        <React.Fragment>
        <Box>
            {
                state.list.map((food, key) => (
                    <DraggableObject onClick={()=>handle_click(food)} key={key} object={food} >
                        <FoodCard food={food} />
                    </DraggableObject>
                ))
            }
        </Box>

        <DrawerLayout isOpen={isOpen} onClose={onClose} header='Details' placement='left' size='md' >
            <FoodDetails editFood={editing} save_edit={handle_save} />
        </DrawerLayout>

        </React.Fragment>
    )
}

export default ListMyFoods
