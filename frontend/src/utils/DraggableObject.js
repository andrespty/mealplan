import React, { useEffect } from 'react'
// import { useDrag } from 'react-dnd'
import { Draggable } from 'react-beautiful-dnd'

import { Box } from '@chakra-ui/react'


function DraggableObject( {children, object, onClick, index} ) {

    // const [{isDragging, info}, drag] = useDrag(() => ({
    //     type: 'object',
    //     item: object,
    //     collect: monitor => ({
    //       isDragging: !!monitor.isDragging(),
    //       info: monitor
    //     }),
    //   }))
    //   console.log(info)
    return (
      <Draggable draggableId={object.name} index={index} > 
      {/* <Box onClick={onClick} ref={drag} style={{opacity: isDragging ? 0.5 : 1}} > */}
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
