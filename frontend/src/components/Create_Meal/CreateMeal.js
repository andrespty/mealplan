import React, { createContext } from 'react'
import { Box, Heading, Button, Input, Divider, Text, Flex, Spacer, useDisclosure, Center } from '@chakra-ui/react'
import InputField from '../Inputs/InputField'
import useCreateMeal from './useCreateMeal'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodHub from '../Food/Food_Hub/FoodHub'
import FoodCard from '../Food/List_Food/FoodCard'
import FoodDetails from '../Food/Food_Details/FoodDetails'
import ChartPie from '../Charts/ChartPie'
import Macros from '../Macros/Macros'

const colors = ['#0088FE', '#00C49F', '#FF8042']

function CreateMeal() {
    
    const { isOpen: detailsIsOpen, onClose: detailsClose, onOpen:detailsOnOpen } = useDisclosure()
    const { isOpen: addFoodIsOpen, onClose: addFoodClose, onOpen:addFoodOnOpen } = useDisclosure()
    
    const { meal_info, setMealInfo, create_meal, editFood, save_edit, open_details } = useCreateMeal(detailsClose, detailsOnOpen)

    console.log('Render CREATE MEAL')
    
    return (
        <Box>
            <MealContext.Provider value={{ meal_info, setMealInfo }} >

                <Button onClick={create_meal} size='sm' colorScheme='green' >Create</Button>

                <InputField isRequired={false} isInvalid={false} label='Meal Name' mb={3}>
                    <Input placeholder='Meal name' onChange={(e) => setMealInfo({name:e.target.value})} value={meal_info.name} />
                </InputField>
                
                <Heading as='h4' size='md' mb={2} textAlign='center' >
                    {meal_info.calories} Calories
                </Heading>

                <Center>
                    <ChartPie data={meal_info.chartData} size={80} colors={colors} />
                </Center>

                <Macros 
                    colors={colors}
                    protein={meal_info.macros.protein}
                    carbs={meal_info.macros.carbs}
                    fat={meal_info.macros.fat}
                />

                <Flex direction='row' alignItems='center' mb={1} >
                    <Text>Items List</Text>
                    <Spacer />
                    <Button size='sm' onClick={addFoodOnOpen} >Add food</Button>
                </Flex>
                <Divider />

                {
                    meal_info.recipe.map((food, key) => (
                        <FoodCard food={food} key={key} handle_select={open_details} />
                    ))
                }

                <DrawerLayout isOpen={addFoodIsOpen} onClose={addFoodClose} header='Foods' placement='left' size='md' >
                    <FoodHub close={addFoodClose} />
                </DrawerLayout>

                <DrawerLayout isOpen={detailsIsOpen} onClose={detailsClose} header='Details' placement='left' size='md' >
                    <FoodDetails editFood={editFood} save_edit={save_edit} />
                </DrawerLayout>

            </MealContext.Provider>
        </Box>
    )
}

export const MealContext = createContext()
export default CreateMeal
