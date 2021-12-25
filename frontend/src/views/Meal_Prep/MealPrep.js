import React, { createContext } from 'react'
import { Box, Button, Heading, Flex, Spacer, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import DrawerLayout from '../../components/Drawer/DrawerLayout'
import CreateMeal from '../../components/Create_Meal/CreateMeal'

// import { DndProvider } from 'react-dnd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

// import { HTML5Backend } from 'react-dnd-html5-backend'
import useMealPrep from './useMealPrep'
import MealFoodMenu from '../../components/Meals/Meal_Food_Menu/MealFoodMenu'
import WeeklyBoard from '../../components/Board/WeeklyBoard'

function MealPrep() {

    const { onOpen, onClose, isOpen } = useDisclosure()
    
    const { week, setWeek, list, setList, handle_drag } = useMealPrep()

    console.log('RENDERING MEAL PREP')

    return (
        <MealPrepContext.Provider value={{week, setWeek, list, setList}} >
        <Box mt={2} p={3}>
            <Flex alignItems='center' >
                <Heading>Meal Prep</Heading>
                <Spacer />
                <Button variant='ghost' onClick={() => console.log(week)} >Log</Button>
                <Button variant='primary' onClick={onOpen} >Create Meal</Button>
            </Flex>

            {/* <DndProvider debugMode={true} backend={HTML5Backend}> */}
            <DragDropContext onDragEnd={handle_drag}  >
                <Grid templateColumns='repeat(5, 1fr)' gap={1} >

                    <GridItem colSpan={{md:5, lg:4}}>
                        <WeeklyBoard />
                    </GridItem>

                    <GridItem colSpan={1} display={{md:'none', lg:'inherit'}} >
                        <Droppable droppableId='menu' >
                            {
                                (provided) => (
                                    <Box {...provided.droppableProps} ref={provided.innerRef} >
                                        <MealFoodMenu />
                                        {/* {provided.placeholder} */}
                                    </Box>
                                )
                            }
                        </Droppable>
                    </GridItem>

                </Grid>
            </DragDropContext>
            {/* </DndProvider> */}

            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Create a meal' placement='left' size='md' >
                <CreateMeal />
            </DrawerLayout>

        </Box>
        </MealPrepContext.Provider>
    )
}

export default MealPrep

export const MealPrepContext = createContext()