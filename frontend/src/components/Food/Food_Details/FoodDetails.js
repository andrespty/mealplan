import React from 'react'
import { Box, Heading, Text, Divider, Flex, Spacer, Center, Select } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'
import WaitLoading from '../../../utils/WaitLoading'
import InputField from '../../Inputs/InputField'
import ChartPie from '../../Charts/ChartPie'
import InputNumber from '../../Inputs/InputNumber'
const convert = require('convert-units')

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
                    {info.food.nutritional_facts.calories} Cal
                </Text>

                <Center>
                    <ChartPie data={info.data} size={80} colors={colors} />
                </Center>
                
                <Macros 
                    protein={info.food.nutritional_facts.protein}
                    carbs={info.food.nutritional_facts.total_carbohydrates}
                    fat={info.food.nutritional_facts.total_fat}

                />
            </Box>

            <Flex direction='row' alignContent='space-between' mt={5}>

                <InputField label='Serving Size' pr={2}>
                    <Select value={info.food.serving_size.serving_unit} onChange={(e) =>console.log(e.target.value)} >
                        {
                            info.serving_sizes.map((size, key) => (
                                <option value={size} key={key}>1 {size}</option>
                            ))
                        }
                    </Select>
                </InputField>

                <Spacer />

                <InputField label='Number of servings' >
                    <InputNumber />
                </InputField>
            </Flex>

        </WaitLoading>
    )
}

export default FoodDetails

const colors = ['#0088FE', '#00C49F', '#FF8042']

const Macros = ({protein, carbs, fat}) => {

    const cal_protein = parseFloat(protein) * 4
    const cal_carbs = parseFloat(carbs) * 4
    const cal_fat = parseFloat(fat) * 9

    const total_calories = cal_protein + cal_carbs + cal_fat
    const protein_percentage = ((cal_protein/total_calories) * 100).toFixed(2)
    const carbs_percentage = ((cal_carbs/total_calories) * 100).toFixed(2)
    const fat_percentage = ((cal_fat/total_calories) * 100).toFixed(2)

    return (
        <Flex 
            alignContent='center' 
            alignItems='center' 
            direction='row' 
            justifyContent='space-evenly'
            mt={2}
        >
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' color={colors[0]} >{carbs_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{carbs} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Carbs</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' color={colors[1]} >{protein_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{protein} g</Text>
                <Text fontWeight='semilight' fontSize='sm'>Protein</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' color={colors[2]}>{fat_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{fat} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Fat</Text>
            </Flex> 
        </Flex>
    )
}