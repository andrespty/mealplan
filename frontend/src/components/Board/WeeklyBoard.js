import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import DailyBoard from './DailyBoard'

function WeeklyBoard() {
    return (
        <Box>
            <Grid templateColumns='repeat(7, 1fr)' gap={1}>

                <GridItem colSpan={1}>
                    <DailyBoard day='Monday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Tuesday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Wednesday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Thursday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Friday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Saturday' />
                </GridItem>

                <GridItem colSpan={1}>
                <DailyBoard day='Sunday' />
                </GridItem>

            </Grid>  
        </Box>
    )
}

export default WeeklyBoard
