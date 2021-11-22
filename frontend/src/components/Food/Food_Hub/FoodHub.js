import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react"
import ListMyFood from '../List_Food/ListMyFood'
import SearchFood from '../Search_Food/SearchFood'
import CreateFood from '../Create_Food/CreateFood'

function FoodHub() {
    return (
        <Box>

            <Tabs colorScheme='green' variant='enclosed' isFitted >
                <TabList>
                    <Tab>Your Foods</Tab>
                    <Tab>Search Items</Tab>
                    <Tab>Create Items</Tab>
                </TabList>
                
                <TabPanels>
                    <TabPanel><ListMyFood /></TabPanel>
                    <TabPanel><SearchFood /></TabPanel>
                    <TabPanel><CreateFood /></TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    )
}

export default FoodHub
