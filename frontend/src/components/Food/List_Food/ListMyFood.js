import React, { useContext } from 'react'
import { Box, Button, Flex, Spacer, CheckboxGroup, Checkbox } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'
import SearchInput from '../../Inputs/SearchInput'
import FoodCard from './FoodCard'
import WaitLoading from '../../../utils/WaitLoading'
import { MealContext } from '../../Create_Meal/CreateMeal'

function ListMyFood({ close }) {

    const { user } = useContext(UserContext)
    const { meal_info, setMealInfo } = useContext(MealContext)

    const { state, handle_search, handle_select, setState } = useListMyFood(user._id, meal_info.items)    

    const add_food = () => {
        close()
        let food_list = state.list.filter(food => state.selected.includes(food._id))
        console.log(food_list)
        setMealInfo({items: state.selected, recipe: food_list})
    }

    const handle_check = (e) => {
        console.log(e)
        setState(prev => ({
            ...prev,
            selected: e
        }))
    }

    return (
        <WaitLoading loading={state.loading}>
            <Box>

                <SearchInput placeholder='Search your foods' onChange={handle_search} />


                <Flex alignItems='center' my={2} >
                    My food
                    <Spacer/>
                    <Button  colorScheme='green' size='sm' onClick={add_food} >Add food</Button>
                </Flex>

                <CheckboxGroup onChange={handle_check} value={state.selected} >
                {
                    state.search.map((food, key) => (
                        <React.Fragment key={key} >
                        <FoodCard food={food} handle_select={handle_select} >
                            <Checkbox value={food._id} />
                        </FoodCard>
                        </React.Fragment>
                    ))
                }
                </CheckboxGroup>
            </Box>
        </WaitLoading>
    )
}

export default ListMyFood
