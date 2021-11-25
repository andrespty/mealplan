import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'
import SearchInput from '../../Inputs/SearchInput'
import FoodCard from './FoodCard'
import WaitLoading from '../../../utils/WaitLoading'

function ListMyFood() {

    const { user } = useContext(UserContext)

    const { search, loading, handle_search } = useListMyFood(user._id)    

    return (
        <WaitLoading loading={loading}>
            <Box>

                <SearchInput placeholder='Search your foods' onChange={handle_search} />

                My food
                {
                    search.map((food, key) => (
                        <FoodCard food={food} key={key} />
                    ))
                }
            </Box>
        </WaitLoading>
    )
}

export default ListMyFood
