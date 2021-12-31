import React, { useCallback } from 'react'
import { Box, Text, Divider,} from '@chakra-ui/react'
import MealTimeBoard from './MealTimeBoard'

const meal_times = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

function DailyBoard({ day, meals }) {

    // const { week, remove } = useContext(MealPrepContext)
    console.log(`Rendering: ${day.toUpperCase()}`)

    const remove = useCallback(() => {

    }, [])

    return  (
            <Box borderWidth={1} borderRadius={5} >

                <Text textAlign={'center'} fontWeight={'semibold'} cursor={'pointer'}  >
                    {day}
                </Text>

                <Text textAlign={'center'} > 
                    {meals.calories}
                </Text>

                {
                    meal_times.map((time, key) => (
                        <React.Fragment key={key}>
                            <Divider/>
                            <MealTimeBoard list={meals[time.toLowerCase()]} time={time} day={day.toLowerCase()} remove={remove} />
                        </React.Fragment>
                    ))
                }

            </Box>
        )
}

export default React.memo(DailyBoard)