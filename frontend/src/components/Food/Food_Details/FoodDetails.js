import React from 'react'
import { Box, Heading, Text, Divider, Flex, Spacer, Center, Select, Button, Input } from '@chakra-ui/react'
import useFoodDetails from './useFoodDetails'
import InputField from '../../Inputs/InputField'
import ChartPie from '../../Charts/ChartPie'
import InputNumber from '../../Inputs/InputNumber'
import Macros from '../../Macros/Macros'

const colors = ['#0088FE', '#00C49F', '#FF8042']

function FoodDetails({ editFood, save_edit }) {

    // editFood is the food object

    const { info, modify, save } = useFoodDetails(editFood, save_edit)

    return (
        <Box>
            <Flex direction='row' alignItems='center' >
                <Box>
                    <Heading>{info.food.name}</Heading>
                    <Text>{info.food.description}</Text>
                </Box>

                <Spacer />
                
                <Box>
                    <Button variant='primary' onClick={save}>Save</Button>
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
                    colors={colors}
                />
            </Box>

            <Flex direction='row' alignContent='space-between' mt={5}>

                <InputField label='Serving Size' pr={2}>
                    <Flex>
                        <Input value={info.inputs.serving} onChange={e => modify({serving:e.target.value})} type={'number'} mr={1} />
                        <Select value={info.inputs.unit} onChange={(e) => modify({unit:e.target.value})} >
                            {
                                info.serving_sizes.map((size, key) => (
                                    <option value={size} key={key}>{size}</option>
                                ))
                            }
                        </Select>
                    </Flex>
                </InputField>

                <Spacer />

                <InputField label='Number of servings' >
                    <InputNumber value={info.inputs.number} onChange={e => modify({number:e})} />
                </InputField>
            </Flex>

            {/* will add the nutritional fact in the future */}
            
            <Box mt={3} >
                <Heading size='md' >Nutritional Facts</Heading>
                <Text>1 Serving: {info.food.serving_size.serving}{info.food.serving_size.serving_unit} </Text>


            </Box>
        </Box>
    )
}

export default FoodDetails


