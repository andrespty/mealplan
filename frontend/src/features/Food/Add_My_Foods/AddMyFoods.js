import React, { useContext } from 'react'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'
import SearchInput from '../../../components/Inputs/SearchInput'
import FoodCard from '../FoodCard'
import { MealContext } from '../../Meals/Create_Meal/CreateMeal'
import MultiSelectList from '../../../layouts/List/MultiSelectList'

function AddMyFoods({ close, onAddFood }) {

    const { user } = useContext(UserContext)
    const { meal_info } = useContext(MealContext)

    const { state, handle_search, handle_select } = useListMyFood(user._id, meal_info.items)    

    const add_food = () => {
        let food_list = state.list.filter(food => state.selected.includes(food._id))
        onAddFood({food_list:food_list, idList:state.selected})
        close()
    }

    return (
        <Box>

            <SearchInput placeholder='Search your foods' onChange={handle_search} />

            <Flex alignItems='center' my={2} >
                My food
                <Spacer/>
                <Button  variant='primary' size='sm' onClick={add_food} >Add food</Button>
            </Flex>

            <MultiSelectList 
                items={state.search}
                resourceName={'obj'}
                itemComponent={FoodCard}
                onClickItem={(x) => console.log(x)}
                isLoading={state.loading}
                selectedValues={state.selected}
                onChange={handle_select}
            />
        </Box>
    )
}

export default AddMyFoods
