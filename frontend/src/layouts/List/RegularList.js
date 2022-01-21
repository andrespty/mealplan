import React from 'react'
import { Box } from '@chakra-ui/react'

function RegularList({ items, resourceName, onClickItem, itemComponent: ItemComponent }) {
    return (
        <>
            {
                items.map((item, key) => (
                    <Box onClick={() => onClickItem(item)} >
                        <ItemComponent key={key} {...{ [resourceName]: item }}/>
                    </Box>
                ))
            }   
        </>
    )
}

export default RegularList

// Usage 
// <RegularList items='list of items' resourceName='name of prop' itemComponent='component to render '