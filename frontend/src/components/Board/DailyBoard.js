import React from 'react'
import { Box, Text, Divider, IconButton, Flex, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useDrop } from 'react-dnd'

function DailyBoard({ day }) {

    return (
        <Box borderWidth={1} borderRadius={5} >

            <Text textAlign={'center'} fontWeight={'semibold'} >
                {day}
            </Text>

            <Divider />

            <MealTime time={'Breakfast'} />

            <Divider/>

            <MealTime time={'Lunch'}  />

            <Divider/>

            <MealTime time={'Dinner'} />
            
            <Divider/>

            <MealTime time={'Snacks'} />

        </Box>
    )
}

export default DailyBoard


const MealTime = ({ time }, ref) => {

    const [{isOver}, drop ] = useDrop(() => ({
        accept:'object',
        drop:(item) => dropObject(item._id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
          }),
    }))

    const dropObject = (_id) => {
        console.log(_id)
    }

    return (
        <Box minH={100} p={1} ref={drop}>
            <Flex>
                <Text fontSize='sm'>{time}</Text>
                <Spacer />
                <IconButton size='xs' variant='ghost' icon={<AddIcon />} />
            </Flex>
            
                
        </Box>
    )
}