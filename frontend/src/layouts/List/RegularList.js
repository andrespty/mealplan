import React from 'react'
import { Box } from '@chakra-ui/react'
import CardContainer from '../../containers/CardContainer'

function RegularList({ items, resourceName, onClickItem, itemComponent: ItemComponent, ...props }) {
    return (
        <>
            {
                items.map((item, key) => (
                    <CardContainer 
                        box={Box}
                        onClick={() => onClickItem(item)} 
                        key={key}
                        {...props}
                    >
                        <ItemComponent {...{ [resourceName]: item }}/>
                    </CardContainer>
                ))
            }   
        </>
    )
}

export default RegularList

// Usage 
// <RegularList items='list of items' resourceName='name of prop' itemComponent='component to render '