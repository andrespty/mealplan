import React from 'react'
import { useDrag } from 'react-dnd'
import { Box } from '@chakra-ui/react'

function DraggableObject( {children, object} ) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'object',
        item:{object:object},
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))

    return (
        <Box ref={drag} cursor={'move'} style={{opacity: isDragging ? 0.5 : 1}} >
            { children }
        </Box>
    )
}

export default DraggableObject
