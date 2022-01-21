import React, { createContext } from 'react'
import { Box, Heading, Button, Input, Divider, Text, Flex, Spacer, useDisclosure, Center, Alert, Collapse, AlertIcon, CloseButton } from '@chakra-ui/react'
import InputField from '../../components/Inputs/InputField'
import useCreateMeal from './useCreateMeal'
import DrawerLayout from '../../components/Drawer/DrawerLayout'
import FoodHub from '../Food/Food_Hub/FoodHub'
import FoodCard from '../Food/FoodCard'
import FoodDetails from '../Food/Food_Details/FoodDetails'
import ChartPie from '../../components/Charts/ChartPie'
import Macros from '../../components/Macros/Macros'
import RegularList from '../../layouts/List/RegularList'

const colors = ['#0088FE', '#00C49F', '#FF8042']

function CreateMeal() {
    
    const { isOpen: detailsIsOpen, onClose: detailsClose, onOpen:detailsOnOpen } = useDisclosure()
    const { isOpen: addFoodIsOpen, onClose: addFoodClose, onOpen:addFoodOnOpen } = useDisclosure()
    
    const { meal_info, setMealInfo, create_meal, editFood, save_edit, open_details } = useCreateMeal(detailsClose, detailsOnOpen)

    console.log(meal_info)
    
    return (
        <Box>
            <MealContext.Provider value={{ meal_info, setMealInfo }} >

                <Collapse in={meal_info.openAlert}>
                    <Alert status={meal_info.createSuccess ? 'success' : 'error'} variant='left-accent' >
                        <AlertIcon />
                        {
                            meal_info.createSuccess
                            ? 'Your meal was created successfully'
                            : 'An error happened'
                        }
                        <CloseButton position='absolute' right='8px' top='8px' onClick={() => setMealInfo({openAlert:false})}/>
                    </Alert>
                </Collapse>

                <Button 
                    onClick={create_meal} 
                    size='sm' 
                    variant='primary'
                    isLoading={meal_info.isCreating}
                    isDisabled={!meal_info.hasItems}
                >
                    Create
                </Button>


                {/* Inputs  */}
                <InputField isRequired={false} isInvalid={false} label='Meal Name' mb={3}>
                    <Input placeholder='Meal name' onChange={(e) => setMealInfo({name:e.target.value})} value={meal_info.name} />
                </InputField>

                <InputField isRequired={true} isInvalid={false} label='Description' mb={3}>
                    <Input placeholder='Description' onChange={(e) => setMealInfo({description:e.target.value})} value={meal_info.description} />
                </InputField>
                

                {/* Data  */}
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


                {/* Items List  */}
                <Flex direction='row' alignItems='center' my={2} >
                    <Text>Items List</Text>
                    <Spacer />
                    <Button size='sm' onClick={() => setMealInfo({edit:true})} variant='primaryGhost'  mx={2}>Edit</Button>
                    <Button size='sm' onClick={addFoodOnOpen} variant='primaryOutline'>Add food</Button>
                </Flex>

                <Divider />

                {/* {
                    meal_info.recipe.map((food, key) => (
                        <FoodCard food={food} key={key} handle_select={open_details} />
                    ))
                } */}
                <RegularList 
                    items={meal_info.recipe}
                    resourceName={'food'}
                    itemComponent={FoodCard}
                    onClickItem={open_details}
                />


                {/* Drawers  */}
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