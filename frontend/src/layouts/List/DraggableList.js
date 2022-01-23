import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Box, Skeleton } from '@chakra-ui/react'
import CardContainer from '../../containers/CardContainer'

function DraggableList({ 
    items, 
    resourceName, 
    isLoading,
    onClickItem,
    itemComponent: ItemComponent
}) {
    return (
        <>
            <Skeleton isLoaded={!isLoading} fadeDuration={0.6} >
            {
                items.map((item, key) => (
                    <Draggable draggableId={item._id} index={key} key={key} cursor={'pointer'} >
                    {
                        (provided) => (
                            <Box 
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <CardContainer box={Box}
                                    onClick={()=>onClickItem(item)}
                                >
                                    <ItemComponent {...{ [resourceName]: item }}/>
                                </CardContainer>  
                            </Box>
                        )
                    }
                    </Draggable>
                ))
            }   
            </Skeleton>
        </>
    )
}

export default DraggableList
