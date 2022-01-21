import React from 'react';
import { Box, Skeleton, Checkbox, Flex } from '@chakra-ui/react';

function MultiSelectList({ 
    items, 
    resourceName, 
    onClickItem, 
    isLoading,
    itemComponent:ItemComponent 
}) {

    const handle_click = (obj) => {
        onClickItem(obj)
    }

    return (
        <>
            <Skeleton isLoaded={!isLoading} >
            {
                items.map((item, key) => (
                    <Flex
                        direction={'row'}
                        alignItems={'center'}
                        cursor={'pointer'}
                        onClick={() => handle_click(item)}
                    >
                        <Checkbox />
                        <ItemComponent key={key} {...{ [resourceName]: item }} />
                    </Flex>
                ))
            }
            </Skeleton>
        </>
    )
}

export default MultiSelectList;
