import React, { createContext } from 'react'
import { Box, Heading, Button, Input, Divider, Text, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import InputField from '../Inputs/InputField'
import useCreateMeal from './useCreateMeal'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodHub from '../Food/Food_Hub/FoodHub'
import FoodCard from '../Food/List_Food/FoodCard'

function CreateMeal() {

    const { meal_info, setMealInfo, create_meal } = useCreateMeal()
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <Box>
            <MealContext.Provider value={{ meal_info, setMealInfo }} >

                <Button onClick={create_meal} size='sm' colorScheme='green' >Create</Button>

                <InputField isRequired={false} isInvalid={false} label='Meal Name' mb={3}>
                    <Input placeholder='Meal name' onChange={(e) => setMealInfo({name:e.target.value})} value={meal_info.name} />
                </InputField>
                
                <Heading as='h4' size='md' mb={2} >Calories: </Heading>

                <Flex direction='row' alignItems='center' mb={1} >
                    <Text>Items List</Text>
                    <Spacer />
                    <Button size='sm' onClick={onOpen} >Add food</Button>
                </Flex>
                <Divider />

                {
                    meal_info.recipe.map((food, key) => (
                        <FoodCard food={food} key={key} />
                    ))
                }

                <DrawerLayout isOpen={isOpen} onClose={onClose} header='Foods' placement='left' size='md' >
                    <FoodHub close={onClose} />
                </DrawerLayout>

            </MealContext.Provider>
        </Box>
    )
}

export const MealContext = createContext()
export default CreateMeal
