import React from 'react'
import { Box, Flex, Text, Popover, PopoverArrow, PopoverTrigger, PopoverContent, PopoverCloseButton, Button } from '@chakra-ui/react'

function BoardCardCondensed({ name, calories }) {
    return (
        <Popover trigger='hover' size='sm'>
            <PopoverTrigger>
                <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} _hover={{opacity:0.5}} cursor={'pointer'}>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text fontSize='xs' fontWeight='bold' isTruncated >{name}</Text>
                        <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
                            {calories}
                        </Text>
                    </Flex>
                    
                </Box>
            </PopoverTrigger>
            <PopoverContent p={3}>
                <PopoverArrow />
                
                <Flex flexDir={'row'} justifyContent={'space-between'} >
                    <Button isFullWidth mr={1} variant='primaryOutline' >Edit</Button>
                    <Button ml={1} size='md' variant='ghost' >Delete</Button>
                </Flex>
                
            </PopoverContent>
        </Popover>
    )
}

export default BoardCardCondensed
