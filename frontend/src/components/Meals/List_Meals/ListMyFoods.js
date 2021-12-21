import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import useListMyFood from '../../Food/List_Food/useListMyFood'
import FoodCard from '../../Food/List_Food/FoodCard'
import DraggableObject from '../../../utils/DraggableObject'
import { UserContext } from '../../../App'

function ListMyFoods() {

    const { user } = useContext(UserContext)
    const { state } = useListMyFood(user._id, [])

    return (
        <Box>
            {
                state.list.map((food, key) => (
                    <DraggableObject key={key} object={food} >
                        <FoodCard food={food} />
                    </DraggableObject>
                ))
            }
        </Box>
    )
}

export default ListMyFoods
