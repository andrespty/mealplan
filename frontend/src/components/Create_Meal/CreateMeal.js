import React from 'react'
import { Box, Heading, Button, Input, Divider, Text, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import InputField from '../Inputs/InputField'
import useCreateMeal from './useCreateMeal'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodHub from '../Food/Food_Hub/FoodHub'

function CreateMeal() {

    const { info } = useCreateMeal()
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <Box>

            <InputField isRequired={false} isInvalid={false} label='Meal Name' mb={3}>
                <Input placeholder='Meal name'/>
            </InputField>
            
            <Heading as='h4' size='md' mb={2} >Calories: </Heading>

            <Flex direction='row' alignItems='center' mb={1} >
                <Text>Items List</Text>
                <Spacer />
                <Button size='sm' onClick={onOpen} >Add food</Button>
            </Flex>
            <Divider />

            <DrawerLayout isOpen={isOpen} onClose={onClose} header='Foods' placement='left' size='md' >
                <FoodHub />
            </DrawerLayout>

        </Box>
    )
}

export default CreateMeal
