import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'

function ListMyFood() {

    const { user } = useContext(UserContext)

    useListMyFood(user._id)    

    return (
        <div>
            My food
        </div>
    )
}

export default ListMyFood
