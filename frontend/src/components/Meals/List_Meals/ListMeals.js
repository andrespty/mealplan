import React from 'react'
import { Box, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import ListMyMeals from './ListMyMeals'
import NeedsLogIn from '../../../utils/NeedsLogIn'
import ListMyFood from './ListMyFoods'

function ListMeals() {

    return (
        <Box>
            
            <Tabs colorScheme={'primaryTabs'} variant='enclosed' isLazy={true} >
                <TabList>
                    <Tab>My Meals</Tab>
                    <Tab>My Foods</Tab>
                    <Tab>Search</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <NeedsLogIn>
                            <ListMyMeals />
                        </NeedsLogIn>
                    </TabPanel>
                    <TabPanel>
                        <NeedsLogIn>
                            <ListMyFood />
                        </NeedsLogIn>
                    </TabPanel>
                    <TabPanel>
                        <NeedsLogIn>
                            <ListMyMeals type='all'  />
                        </NeedsLogIn>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            
        </Box>
    )
}

export default React.memo(ListMeals)
