import React from 'react';
import { Skeleton, Checkbox, Flex, CheckboxGroup } from '@chakra-ui/react';
import CardContainer from '../../containers/CardContainer';

function MultiSelectList({ 
    items, 
    resourceName, 
    onClickItem, 
    isLoading,
    onChange,
    selectedValues = [],
    itemComponent:ItemComponent 
}) {
    console.log(selectedValues)
    const handle_click = (_id) => {
        onChange(_id)
    }

    const handle_checkbox_group = (list) => {
        onChange(list)
    }

    return (
        <>
            <Skeleton isLoaded={!isLoading} >
                <CheckboxGroup 
                    onChange={handle_checkbox_group} 
                    value={selectedValues} 
                    colorScheme={'primary'} 
                >
                {
                    items.map((item, key) => (
                        <CardContainer
                            box={Flex}
                            key={key}
                            cursor='pointer'
                            alignItems={'center'}
                            onClick={() => handle_click(item._id)}
                            pl={3}
                        >
                            <Checkbox isChecked={selectedValues.includes(item._id)} />
                            <ItemComponent {...{ [resourceName]: item }} /> 
                        </CardContainer>
                    ))
                }
                </CheckboxGroup>
            </Skeleton>
        </>
    )
}

export default MultiSelectList;


const CheckboxItem = () => {
    return (
        <>

        </>
    )
}