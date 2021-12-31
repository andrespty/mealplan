import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Box } from '@chakra-ui/react'

function DraggableObject( {children, object, onClick, index} ) {

    return (
      <Draggable draggableId={object.name} index={index} cursor={'pointer'} > 
      {
        (provided) => (
          <Box onClick={onClick} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
              { children }
          </Box>
        )
      }
      </Draggable>
    )
}

export default DraggableObject
