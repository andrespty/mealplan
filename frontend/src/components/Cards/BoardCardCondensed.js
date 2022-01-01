import React from 'react'
import { useDisclosure, Box, Flex, Text, Popover, PopoverArrow, PopoverTrigger, PopoverContent, IconButton,Button,  ButtonGroup } from '@chakra-ui/react'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodDetails from '../Food/Food_Details/FoodDetails'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

function BoardCardCondensed({ meal={},food={}, calories, remove, time, day }) {

    const  { isOpen, onClose, onOpen } = useDisclosure()
    const get_id = React.useCallback(() => {
        if (meal._id){
            return meal._id
        }
        else {
            return food._id
        }
    }, [meal, food])
    return (
        <Box borderWidth='1px' borderRadius={5} m={1} px={1} py={1} position={'relative'} >

            <ButtonGroup
                size='xs'
                position={'absolute'}
                w='100%'
                h='100%'
                opacity={0}
                top={0}
                left={0}
                _hover={{
                    opacity:1,
                    background:'gray.200',
                    transition:'all 0.2s ease',
                    transitionProperty:'opacity, background'
                }}
                transition={'all 0.2s ease'}
                transitionProperty={'opacity, background'}
                borderRadius={5}
                variant='ghost'
                alignContent={'center'}
                alignItems={'center'}
            >
                <Button leftIcon={<EditIcon/>}>Edit</Button>
                <IconButton icon={<DeleteIcon />} onClick={() => remove({time:time, day:day, _id:get_id()})} />
            </ButtonGroup>

            <Flex flexDir={'row'} justifyContent={'space-between'} _hover={{opacity:0.5}}>
                <Text fontSize='xs' fontWeight='bold' isTruncated >{meal.name}{food.name}</Text>
                <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
                    {calories}
                </Text>
            </Flex>


        </Box>
    )
}

export default React.memo(BoardCardCondensed)

