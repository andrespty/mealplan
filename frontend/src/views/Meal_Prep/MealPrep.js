import React from 'react'
import { Box, Button, Heading, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import DrawerLayout from '../../components/Drawer/DrawerLayout'
import CreateMeal from '../../components/Create_Meal/CreateMeal'

import ChartPie from '../../components/Charts/ChartPie'

function MealPrep() {

    const { onOpen, onClose, isOpen } = useDisclosure()

    return (
        <Box mt={2} p={3}>
            <Flex alignItems='center' >
                <Heading>Meal Prep</Heading>
                <Spacer />
                <Button variant='solid' colorScheme='green' onClick={onOpen} >Create Meal</Button>
            </Flex>

            {/* <ChartPie /> */}

            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Create a meal' placement='left' size='md' >
                <CreateMeal />
            </DrawerLayout>

        </Box>
    )
}

export default MealPrep

