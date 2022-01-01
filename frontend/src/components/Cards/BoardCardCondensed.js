import React, { useState } from 'react'
import { useDisclosure, Box, Flex, Text, IconButton,Button,  ButtonGroup } from '@chakra-ui/react'
import DrawerLayout from '../Drawer/DrawerLayout'
import FoodDetails from '../Food/Food_Details/FoodDetails'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

function BoardCardCondensed({ meal={}, calories, remove, time, day, save }) {

    const  { isOpen, onClose, onOpen } = useDisclosure()
    const [ editing ] = useState({
        _id:meal._id, unit:get_unit_number(meal).unit, number:get_unit_number(meal).number
    })

    const handle_click = () => {
        if (meal.isMeal){

        }
        else {
            onOpen()
        }
    }

    const handle_save = (obj) => {
        save({time:time, day:day, obj:obj})
        onClose()
    }

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
                <Button leftIcon={<EditIcon/>} onClick={handle_click} >Edit</Button>
                <IconButton icon={<DeleteIcon />} onClick={() => remove({time:time, day:day, _id:meal._id})} />
            </ButtonGroup>

            <Flex flexDir={'row'} justifyContent={'space-between'} _hover={{opacity:0.5}}>
                <Text fontSize='xs' fontWeight='bold' isTruncated >{meal.name}</Text>
                <Text fontWeight='medium' textAlign='right' fontSize={'xs'}>
                    {calories}
                </Text>
            </Flex>

            <DrawerLayout placement='left' size='md' isOpen={isOpen} onClose={onClose} >
                <FoodDetails editFood={editing} save_edit={handle_save} />
            </DrawerLayout>


        </Box>
    )
}

export default React.memo(BoardCardCondensed)

const get_unit_number = (obj) => {
    if (obj.isMeal){
        return { unit:'g', number:'1'}
    }
    else {
        let unit = obj.serving_size.serving_unit
        let number = obj.serving_size.number_of_servings
        return {unit:unit, number:number}
    }
}