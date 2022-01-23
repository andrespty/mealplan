import React, { useContext, useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import FoodCard from '../FoodCard'
import { UserContext } from '../../../App'
import DrawerLayout from '../../../components/Drawer/DrawerLayout'
import FoodDetails from '../Food_Details/FoodDetails'
import useListMyFoods from './useListMyFoods'
import DraggableList from '../../../layouts/List/DraggableList'
import LoadingData from '../../../containers/LoadingData'

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

                <LoadingData isLoading={isLoading} >
                    <DraggableList 
                        isLoading={isLoading}
                        items={list.foods} 
                        resourceName={'obj'}
                        itemComponent={FoodCard} 
                        onClickItem={handle_click}
                    />
                </LoadingData>

            </Box>
            
            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Details' placement='left' size='md' >
                <FoodDetails editFood={editing} save_edit={handle_save} />
            </DrawerLayout>

        </React.Fragment>
    )
}



export default React.memo(ListMyFoods)
