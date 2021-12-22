import React from 'react'
import { useDrag } from 'react-dnd'
import { Box } from '@chakra-ui/react'

function DraggableObject( {children, object, onClick} ) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'object',
        item:{object:object},
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))

    return (
        <Box onClick={onClick} ref={drag} cursor={'move'} style={{opacity: isDragging ? 0.5 : 1}} >
            { children }
        </Box>
    )
}

export default DraggableObject
