import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react'

function PopOver({children, header, body}) {
    return (
        <PopOver>
            <PopoverTrigger>
                {children}
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton/>
                <PopoverHeader>{header}</PopoverHeader>
                <PopoverBody>{body}</PopoverBody>
            </PopoverContent>
        </PopOver>
    )
}

export default PopOver
