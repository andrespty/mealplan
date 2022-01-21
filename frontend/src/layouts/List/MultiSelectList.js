import React from 'react';
import { Box } from '@chakra-ui/react';

function MultiSelectList({ items, resourceName, onClickItem, itemComponent:ItemComponent }) {
  return (
      <>
          {
              items.map((item, key) => (
                  <Box>
                      <ItemComponent key={key} {...{ [resourceName]: item }} />
                  </Box>
              ))
          }
      </>
  )
}

export default MultiSelectList;
