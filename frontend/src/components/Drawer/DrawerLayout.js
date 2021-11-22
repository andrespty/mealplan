import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,} from "@chakra-ui/react"

function DrawerLayout({isOpen, onClose, placement, header, children, size, ...props}) {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement={placement} size={size}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>{header}</DrawerHeader>
                <DrawerBody>
                    {children}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerLayout
