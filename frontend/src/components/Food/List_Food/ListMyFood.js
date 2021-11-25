import React, { useContext } from 'react'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'
import SearchInput from '../../Inputs/SearchInput'
import FoodCard from './FoodCard'
import WaitLoading from '../../../utils/WaitLoading'

function ListMyFood() {

    const { user } = useContext(UserContext)

    const { search, loading, handle_search, selected, handle_selection } = useListMyFood(user._id)    

    const log = () => console.log(selected)

    return (
        <WaitLoading loading={loading}>
            <Box>

                <SearchInput placeholder='Search your foods' onChange={handle_search} />


                <Flex alignItems='center' my={2} >
                    My food
                    <Spacer/>
                    <Button isDisabled={selected.length === 0} colorScheme='green' size='sm' onClick={log} >Add food</Button>
                </Flex>


                {
                    search.map((food, key) => (
                        <FoodCard food={food} key={key} action={handle_selection}  />
                    ))
                }
            </Box>
        </WaitLoading>
    )
}

export default ListMyFood
