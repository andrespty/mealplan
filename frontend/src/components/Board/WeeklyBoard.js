import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import DailyBoard from './DailyBoard'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function WeeklyBoard({ mealPrep }) {
    // console.log('WEEKLY BOARD')

    const { week, remove } = mealPrep

    return (
        <Box>
            <Grid templateColumns='repeat(7, 1fr)' gap={1} >

                {
                    days.map((day, key) => (
                        <GridItem colSpan={1} key={key} >
                            <DailyBoard day={day} meals={week[day.toLowerCase()]} remove={remove} />
                        </GridItem>
                    ))
                }

            </Grid>  
        </Box>
    )
}

export default React.memo(WeeklyBoard)
