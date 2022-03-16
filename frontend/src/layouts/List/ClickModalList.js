import React from 'react'
import { Box, Skeleton } from '@chakra-ui/react'
import CardContainer from '../../containers/CardContainer'

function ClickModalList({ 
    items, 
    resourceName, 
    onClickItem, 
    isLoading = false,
    itemComponent: ItemComponent, 
    ...props 
}) {
    return (
        <>
            <Skeleton isLoaded={!isLoading} fadeDuration={0.6} >
            {
                items.map((item, key) => (
                    <CardContainer box={Box} onClick={ onClickItem(item) }>
                        <ItemComponent {...{[resourceName]: item}} />
                    </CardContainer>
                ))
            }   
            </Skeleton>
        </>
    )
}

export default ClickModalList