import React from 'react'
import { Box, Text, Divider,} from '@chakra-ui/react'
import MealTimeBoard from './MealTimeBoard'

function DailyBoard({ day }) {

    return (
        <Box borderWidth={1} borderRadius={5} >

            <Text textAlign={'center'} fontWeight={'semibold'} cursor={'pointer'}  >
                {day}
            </Text>

            <Divider />

            <MealTimeBoard time={'Breakfast'} day={day.toLowerCase()} />

            <Divider/>

            <MealTimeBoard time={'Lunch'} day={day.toLowerCase()}  />

            <Divider/>

            <MealTimeBoard time={'Dinner'} day={day.toLowerCase()} />
            
            <Divider/>

            <MealTimeBoard time={'Snacks'} day={day.toLowerCase()} />

        </Box>
    )
}

export default React.memo(DailyBoard)
