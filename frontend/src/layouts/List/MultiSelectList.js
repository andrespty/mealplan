import React from 'react';
import { Box, Skeleton, Checkbox, Flex, CheckboxGroup } from '@chakra-ui/react';

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
                <CheckboxGroup>
                {
                    items.map((item, key) => (
                        <Flex
                            key={key}
                            direction={'row'}
                            alignItems={'center'}
                            cursor={'pointer'}
                            onClick={() => handle_click(item)}
                        >
                            <Checkbox colorScheme={'primary'} />
                            <ItemComponent {...{ [resourceName]: item }} />
                        </Flex>
                    ))
                }
                </CheckboxGroup>
            </Skeleton>
        </>
    )
}

export default MultiSelectList;
