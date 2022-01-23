import React from 'react';

function CardContainer({box:Box, children, ...props}) {
  return(
      <Box 
        borderWidth={1}
        borderRadius={'lg'}
        m={2}
        py={1}
        {...props}
      >
          {children}
      </Box>
  )
}

export default CardContainer;
