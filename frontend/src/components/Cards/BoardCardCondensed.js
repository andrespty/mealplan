import React from 'react'
import { useDisclosure, Box, Flex, Text, Popover, PopoverArrow, PopoverTrigger, PopoverContent, Button } from '@chakra-ui/react'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodDetails from '../Food/Food_Details/FoodDetails'

function BoardCardCondensed({ meal={},food={}, calories, remove, time, day }) {

    const  { isOpen, onClose, onOpen } = useDisclosure()

    const get_id = () => {
        if (meal._id){
            return meal._id
        }
        else {
            return food._id
        }
    }

    return (
        // <Popover trigger='click' size='sm' lazyBehavior={'unmount'} isLazy={true} >
        //     <PopoverTrigger>
        //         <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} _hover={{opacity:0.5}} cursor={'pointer'}>

        //             <Flex flexDir={'row'} justifyContent={'space-between'}>
        //                 <Text fontSize='xs' fontWeight='bold' isTruncated >{meal.name}{food.name}</Text>
        //                 <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
        //                     {calories}
        //                 </Text>
        //             </Flex>
                    
        //         </Box>
        //     </PopoverTrigger>
        //     <PopoverContent p={3}>
        //         <PopoverArrow />
                
        //         <Flex flexDir={'row'} justifyContent={'space-between'} >
        //             <Button isFullWidth mr={1} variant='primaryOutline' >Edit</Button>
        //             <Button ml={1} size='md' variant='ghost' onClick={() => {remove({time:time, day:day, _id:get_id()}); onClose()}} >Delete</Button>
        //         </Flex>

        //         <DrawerLayout isOpen={isOpen} onClose={onClose}  >
        //             <FoodDetails editFood={{_id:food._id, unit:food}}  />
        //         </DrawerLayout>
                
        //     </PopoverContent>
        // </Popover>
        <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} cursor={'pointer'} _hover={{opacity:0.5}} >
            <Flex flexDir={'row'} justifyContent={'space-between'} _hover={{display:'none'}} >
                <Text fontSize='xs' fontWeight='bold' isTruncated >{meal.name}{food.name}</Text>
                <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
                    {calories}
                </Text>
            </Flex>
            <Flex flexDir={'row'} justifyContent={'space-between'} >
                <Text fontSize='xs' fontWeight='bold' isTruncated >Andres</Text>
                <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
                    Ho
                </Text>
            </Flex>
        </Box>
    )
}

export default React.memo(BoardCardCondensed)