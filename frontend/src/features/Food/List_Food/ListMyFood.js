import React, { useContext } from 'react'
import { Box, Button, Flex, Spacer, CheckboxGroup, Checkbox } from '@chakra-ui/react'
import useListMyFood from './useListMyFood'
import { UserContext } from '../../../App'
import SearchInput from '../../../components/Inputs/SearchInput'
import FoodCard from '../FoodCard'
import { MealContext } from '../../Meals/Create_Meal/CreateMeal'
import MultiSelectList from '../../../layouts/List/MultiSelectList'

function ListMyFood({ close }) {

    const { user } = useContext(UserContext)
    const { meal_info, setMealInfo } = useContext(MealContext)

    const { state, handle_search, handle_select, setState } = useListMyFood(user._id, meal_info.items)    

    const add_food = () => {
        close()
        let food_list = state.list.filter(food => state.selected.includes(food._id))
        let calories = 0
        let macros = {
            protein:0.0,
            carbs:0.0,
            fat:0.0
        }
        let chartData = [{name:'Carbs', value:0.0}, {name:'Protein', value:0.0}, {name:'Fat', value:0.0},]

        //Looping through all items to be added
        food_list.forEach(food => {
            calories += parseFloat(food.nutritional_facts.calories)
            macros.protein = (parseFloat(macros.protein) + parseFloat(food.nutritional_facts.protein)).toFixed(1)
            macros.carbs = (parseFloat(macros.carbs) + parseFloat(food.nutritional_facts.total_carbohydrates)).toFixed(1)
            macros.fat = (parseFloat(macros.fat) + parseFloat(food.nutritional_facts.total_fat)).toFixed(1)
        })

        //Setting up pie chart
        chartData[0].value = macros.carbs * 4
        chartData[1].value = macros.protein * 4
        chartData[2].value = macros.fat * 9
        setMealInfo({
            items: state.selected,  // This is a list
            recipe: food_list,       // This will show t
            calories: calories,
            macros: macros,
            chartData:chartData
        })
    }

    const handle_check = (e) => {
        console.log(e)
        setState(prev => ({
            ...prev,
            selected: e
        }))
    }

    console.log(state.search)

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
            />
        </Box>
    )
}

export default ListMyFood
