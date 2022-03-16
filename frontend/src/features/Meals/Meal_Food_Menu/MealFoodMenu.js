import React from 'react'
import { Box, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import ListMyMeals from '../List_Meals/ListMyMeals'
import NeedsLogIn from '../../../utils/NeedsLogIn'
import ListMyFoods from '../../Food/List_My_Foods/ListMyFoods'

function MealFoodMenu() {

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
                            <ListMyFoods />
                        </NeedsLogIn>
                    </TabPanel>
                    <TabPanel>
                        <NeedsLogIn>
                            <ListMyMeals type='all'  /> {/* Not yet finished */}
                        </NeedsLogIn>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default React.memo(MealFoodMenu)
