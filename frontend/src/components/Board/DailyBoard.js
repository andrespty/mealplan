import React, { useContext } from 'react'
import { Box, Text, Divider, IconButton, Flex, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useDrop } from 'react-dnd'
import { MealPrepContext } from '../../views/Meal_Prep/MealPrep'
import MealCardCondensed from '../Meals/Card/MealCardCondensed'

function DailyBoard({ day }) {

    return (
        <Box borderWidth={1} borderRadius={5} >

            <Text textAlign={'center'} fontWeight={'semibold'} cursor={'pointer'}  >
                {day}
            </Text>

            <Divider />

            <MealTime time={'Breakfast'} day={day.toLowerCase()} />

            <Divider/>

            <MealTime time={'Lunch'} day={day.toLowerCase()}  />

            <Divider/>

            <MealTime time={'Dinner'} day={day.toLowerCase()} />
            
            <Divider/>

            <MealTime time={'Snacks'} day={day.toLowerCase()} />

        </Box>
    )
}

export default React.memo(DailyBoard)


const MealTime = React.memo(({ time, day }) => {

    const { week, setWeek } = useContext(MealPrepContext)

    const [{isOver}, drop ] = useDrop(() => ({
        accept:'object',
        drop:(item) => dropObject(item.object),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
          }),
    }))

    const dropObject = (object) => {
        console.log(object)
        console.log(week[day][time.toLowerCase()])
        setWeek({
            day:day, 
            time: time.toLowerCase(),
            value:object
        })
    }

    return (
        <Box minH={100} p={1} ref={drop} style={{opacity: isOver ? 0.5 : 1}}>
            <Flex>
                <Text fontSize='sm'>{time}</Text>
                <Spacer />
                <IconButton size='xs' variant='ghost' icon={<AddIcon />} />
            </Flex>
            
            {
                week[day][time.toLowerCase()].map((meal, key) => (
                    <MealCardCondensed meal={meal} key={key}/>
                ))
            }
                
        </Box>
    )
})