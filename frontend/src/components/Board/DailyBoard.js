import React from 'react'
import { Box, Text, Divider,} from '@chakra-ui/react'
import MealTimeBoard from './MealTimeBoard'

const MEAL_TIMES = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

function DailyBoard({ day, meals, remove, save }) {

    // const { week, remove } = useContext(MealPrepContext)
    console.log(`Rendering: ${day.toUpperCase()}`)

    return  (
            <Box borderWidth={1} borderRadius={5} >

                <Text textAlign={'center'} fontWeight={'bold'} cursor={'pointer'}  >
                    {day}
                </Text>

                <Text textAlign={'center'} fontWeight={'semibold'} > 
                    {meals.calories.toFixed(0)}
                </Text>

                {
                    MEAL_TIMES.map((time, key) => (
                        <React.Fragment key={key}>
                            <Divider/>
                            <MealTimeBoard meal={meals[time.toLowerCase()]} time={time} day={day.toLowerCase()} remove={remove} save={save} />
                        </React.Fragment>
                    ))
                }

            </Box>
        )
}

export default React.memo(DailyBoard)