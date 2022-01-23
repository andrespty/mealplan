import React from 'react';
import { Collapse, Alert, AlertIcon, CloseButton } from '@chakra-ui/react';

function CollapseAlert({ open, status, message, close }) {
  return (
    <Collapse in={open}>
        <Alert status={status} variant='left-accent' >
            <AlertIcon />
            {
                message
            }
            <CloseButton position='absolute' right='8px' top='8px' onClick={close}/>
        </Alert>
    </Collapse>
  )
}

export default CollapseAlert;
