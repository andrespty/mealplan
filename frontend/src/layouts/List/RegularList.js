import React from 'react'

function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
    return (
        <>
            {
                items.map((item, key) => (
                    <ItemComponent key={key} {...{ [resourceName]: item }}/>
                ))
            }   
        </>
    )
}

export default RegularList

// Usage 
// <RegularList items='list of items' resourceName='name of prop' itemComponent='component to render '