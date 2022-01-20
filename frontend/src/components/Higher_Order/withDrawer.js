import React from 'react'
import PropTypes from 'prop-types'
import { useDisclosure } from '@chakra-ui/react'

export const withUser = (Component, userId) => {
	return props => {
        const { isOpen, onOpen, onClose } = useDisclosure()

		return (
            <>
                <Component {...props} />
            </>
        )
	}
}
