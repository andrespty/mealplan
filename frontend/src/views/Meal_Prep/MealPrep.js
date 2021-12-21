import React, { createContext } from 'react'
import { Box, Button, Heading, Flex, Spacer, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import DrawerLayout from '../../components/Drawer/DrawerLayout'
import CreateMeal from '../../components/Create_Meal/CreateMeal'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useMealPrep from './useMealPrep'
import ListMeals from '../../components/Meals/List_Meals/ListMeals'
import WeeklyBoard from '../../components/Board/WeeklyBoard'

function MealPrep() {

    const { onOpen, onClose, isOpen } = useDisclosure()
    
    const { week, setWeek } = useMealPrep()

    return (
        <MealPrepContext.Provider value={{week, setWeek}} >
        <Box mt={2} p={3}>
            <Flex alignItems='center' >
                <Heading>Meal Prep</Heading>
                <Spacer />
                <Button variant='ghost' onClick={() => console.log(week)} >Log</Button>
                <Button variant='primary' onClick={onOpen} >Create Meal</Button>
            </Flex>

            <DndProvider backend={HTML5Backend}>
            <Grid templateColumns='repeat(5, 1fr)' gap={1} >

                <GridItem colSpan={4}>
                    <WeeklyBoard />
                </GridItem>

                <GridItem colSpan={1}>
                    <ListMeals />
                </GridItem>

            </Grid>
            </DndProvider>

            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Create a meal' placement='left' size='md' >
                <CreateMeal />
            </DrawerLayout>

        </Box>
        </MealPrepContext.Provider>
    )
}

export default MealPrep

export const MealPrepContext = createContext()