import React from 'react'
import useMealDetails from './useMealDetails'
import { Box, Heading, Text, Divider, Flex, Spacer, Center, Button, useDisclosure, IconButton } from '@chakra-ui/react'
import Macros from '../../Macros/Macros'
import ChartPie from '../../Charts/ChartPie'
import FoodCard from '../../Cards/FoodCard'
import { convert_food_with_serving_sizes } from '../../../utils/ConversionFunctions'
import DrawerLayout from '../../Drawer/DrawerLayout'
import FoodHub from '../../Food/Food_Hub/FoodHub'
import { CloseIcon } from '@chakra-ui/icons'

const colors = ['#0088FE', '#00C49F', '#FF8042']

function MealDetails({ mealID }) {

    // const { isOpen: hubIsOpen, onClose: hubOnClose, onOpen: hubOnOpen } = useDisclosure()
    const { info, edit, remove } = useMealDetails(mealID)

    return (
        <Box>
            <Box>
                <Flex direction={'row'} alignItems={'center'}>
                    <Heading>{info.name}</Heading>
                    <Spacer />
                    <Button variant='primary' >Save</Button>
                </Flex>
                <Text>{info.description}</Text>
            </Box>

            <Divider/>

            <Box my={5}>
                <Text fontSize='xl' align='center' lineHeight='1' >
                    {info.calories} Cal
                </Text>

                <Center>
                    <ChartPie data={info.data} size={80} colors={colors} />
                </Center>
                
                <Macros 
                    protein={info.macros.protein}
                    carbs={info.macros.carbs}
                    fat={info.macros.fat}
                    colors={colors}
                />
            </Box>
            
            <Divider />

            <Flex my={5} direction={'row'} >
                <Heading size='md'>Ingredients</Heading>
                <Spacer/>
                <Button size='sm' variant={'ghost'} colorScheme={'primary'} mr={1} onClick={edit}>
                    {info.isEditing ? 'Done' : 'Edit'}
                </Button>
                <Button size='sm' variant={'primaryOutline'} onClick={() => console.log(info.recipe)} >Add</Button>
            </Flex>
            
            {
                info.recipe.map((food, key) => {
                    let bar = convert_food_with_serving_sizes({food:food.food, serving_size:food.serving_size})
                    console.log(bar)
                    return(info.isEditing
                        ?<FoodCard key={key} food={bar}>
                            <IconButton icon={<CloseIcon />} size='md' onClick={() => remove(food._id)} />
                        </FoodCard>
                        :<FoodCard key={key} food={bar} />
                    )
                })
            }

            {/* Drawers  */}

            {/* <DrawerLayout isOpen={hubIsOpen} onClose={hubOnClose} header='Foods' placement='left' size='md' >
                    <FoodHub close={hubOnClose} />
            </DrawerLayout> */}

        </Box>
    )
}

export default MealDetails
