import React from 'react'
import { Box, Heading, Text, Divider, Flex, Input } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'
import WaitLoading from '../../../utils/WaitLoading'
import InputField from '../../Inputs/InputField'

function FoodDetails({ foodID }) {

    const { info } = useFoodDetails(foodID)

    return (
        <WaitLoading loading={false}>
            <Box>
                <Heading>{info.food.name}</Heading>
                <Text>{info.food.description}</Text>
                <Divider />
            </Box>

            <Box mt={5}>
                <Text fontSize='xl' align='center' lineHeight='1' >
                    {info.food.nutritional_facts.calories} <br/> Calories
                </Text>


                <Macros 
                    protein={info.food.nutritional_facts.protein}
                    carbs={info.food.nutritional_facts.total_carbohydrates}
                    fat={info.food.nutritional_facts.saturated_fat}

                />
            </Box>

            <Box mt={5}>
                <InputField label='Number of servings' >
                    <Input placeholder=''/>
                </InputField>
            </Box>

        </WaitLoading>
    )
}

export default FoodDetails

const Macros = ({protein, carbs, fat}) => {

    const total = parseInt(protein) + parseInt(carbs) + parseInt(fat)
    const protein_percentage = ((protein/total) * 100).toFixed(2)
    const carbs_percentage = ((carbs/total) * 100).toFixed(2)
    const fat_percentage = ((fat/total) * 100).toFixed(2)

    return (
        <Flex alignContent='center' alignItems='center' direction='row' justifyContent='space-evenly'>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' >{carbs_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{carbs} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Carbs</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' >{protein_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{protein} g</Text>
                <Text fontWeight='semilight' fontSize='sm'>Protein</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' >{fat_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{fat} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Fat</Text>
            </Flex> 
        </Flex>
    )
}