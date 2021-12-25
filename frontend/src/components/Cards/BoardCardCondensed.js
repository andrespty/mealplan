import React from 'react'
import { useDisclosure, Box, Flex, Text, Popover, PopoverArrow, PopoverTrigger, PopoverContent, Button } from '@chakra-ui/react'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodDetails from '../Food/Food_Details/FoodDetails'

function BoardCardCondensed({ meal={},food={}, calories }) {

    if (Object.keys(food).length !== 0){
        console.log(food)
    }

    const  { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <Popover trigger='click' size='sm' lazyBehavior={'unmount'} isLazy={true} >
            <PopoverTrigger>
                <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} _hover={{opacity:0.5}} cursor={'pointer'}>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text fontSize='xs' fontWeight='bold' isTruncated >{meal.name}{food.name}</Text>
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

                <DrawerLayout isOpen={isOpen} onClose={onClose}  >
                    <FoodDetails editFood={{_id:food._id, unit:food}}  />
                </DrawerLayout>
                
            </PopoverContent>
        </Popover>
    )
}

export default React.memo(BoardCardCondensed)
