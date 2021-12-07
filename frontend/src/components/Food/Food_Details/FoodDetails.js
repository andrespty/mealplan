import React from 'react'
import { Box, Heading, Text, Divider, Flex, Spacer, Center, Select, Button } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'
import WaitLoading from '../../../utils/WaitLoading'
import InputField from '../../Inputs/InputField'
import ChartPie from '../../Charts/ChartPie'
import InputNumber from '../../Inputs/InputNumber'

function FoodDetails({ editFood, save_edit }) {

    const { info, modify, save } = useFoodDetails(editFood, save_edit)

    console.log(info)

    return (
        <WaitLoading loading={false}>
            <Flex direction='row' alignItems='center' >
                <Box>
                    <Heading>{info.food.name}</Heading>
                    <Text>{info.food.description}</Text>
                </Box>

                <Spacer />
                
                <Box>
                    <Button colorScheme='green' onClick={save}>Save</Button>
                </Box>
            </Flex>

            <Divider />
            
            <Box mt={5}>
                <Text fontSize='xl' align='center' lineHeight='1' >
                    {info.nutritional_data.calories} Cal
                </Text>

                <Center>
                    <ChartPie data={info.data} size={80} colors={colors} />
                </Center>
                
                <Macros 
                    protein={info.nutritional_data.protein}
                    carbs={info.nutritional_data.total_carbohydrates}
                    fat={info.nutritional_data.total_fat}
                />
            </Box>

            <Flex direction='row' alignContent='space-between' mt={5}>

                <InputField label='Serving Size' pr={2}>
                    <Select value={info.inputs.unit} onChange={(e) => modify({unit:e.target.value})} >
                        {
                            info.serving_sizes.map((size, key) => (
                                <option value={size} key={key}>1 {size}</option>
                            ))
                        }
                    </Select>
                </InputField>

                <Spacer />

                <InputField label='Number of servings' >
                    <InputNumber value={info.inputs.number} onChange={e => modify({number:e})} />
                </InputField>
            </Flex>

            {/* will add the nutritional fact in the future */}

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