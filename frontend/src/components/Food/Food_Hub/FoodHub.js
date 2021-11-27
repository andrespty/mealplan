import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react"
import ListMyFood from '../List_Food/ListMyFood'
import SearchFood from '../Search_Food/SearchFood'
import CreateFood from '../Create_Food/CreateFood'
import NeedsLogIn from '../../../utils/NeedsLogIn'

function FoodHub({ close }) {
    return (
        <Box>

            <Tabs colorScheme='green' variant='enclosed' isFitted isLazy={true} >
                <TabList>
                    <Tab>My Foods</Tab>
                    <Tab>Search Items</Tab>
                    <Tab>Create Items</Tab>
                </TabList>
                
                <TabPanels>

                    <TabPanel>
                        <NeedsLogIn>
                            <ListMyFood close={close} />
                        </NeedsLogIn>
                    </TabPanel>

                    <TabPanel>
                        <SearchFood />
                    </TabPanel>

                    <TabPanel>
                        <NeedsLogIn>
                            <CreateFood />
                        </NeedsLogIn>
                    </TabPanel>

                </TabPanels>
            </Tabs>

        </Box>
    )
}

export default FoodHub
