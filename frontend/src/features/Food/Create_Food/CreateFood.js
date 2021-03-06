import React, { useContext } from 'react'
import useCreateFood from './useCreateFood'
import { Box, Input, Select, Flex, Stack, Heading, Divider, Button, Spacer, Collapse,
Alert, AlertIcon, AlertTitle, AlertDescription, Text } from '@chakra-ui/react'
import InputNumber from '../../../components/Inputs/InputNumber'
import InputField from '../../../components/Inputs/InputField'
import { UserContext } from '../../../App'

function CreateFood() {

    const { user } = useContext(UserContext)

    const { info, setInfo, state, submit } = useCreateFood(user._id)

    return (
        <Box>
            <form onSubmit={submit}>
                <Flex direction='row' alignItems='center' >
                    <Heading size='md'>Food Information</Heading>
                    <Spacer />
                    <Button variant='primary' size='sm' isLoading={state.isLoading} type='submit' >Create Food</Button>
                </Flex>

                <Collapse in={state.alert} >
                    <Alert status={state.status} my={2} borderRadius={5} >
                        <AlertIcon/>
                        <AlertTitle>{state.isSuccess ? 'Success!' : 'Error!'}</AlertTitle>
                        <AlertDescription>
                            {
                                state.isSuccess
                                ?   'Food created successfully!'
                                :   'An error occured while creating the food'
                            }
                        </AlertDescription>
                    </Alert>
                </Collapse>

                {/* Name of food  */}
                <InputField label='Food Name' isRequired={true}>
                    <Input placeholder='ex. Chicken' value={info.name} onChange={(e) => setInfo({name:e.target.value})} />
                </InputField>

                {/* Description of food  */}
                <InputField label='Description' >
                    <Input placeholder='ex. Cooked' value={info.description} onChange={(e) => setInfo({description:e.target.value})} />
                </InputField>

                {/* Serving size  */}
                <InputField label='Serving size' isRequired={true}>
                        <Text>1 Serving:</Text>
                    <Stack direction='row'>
                        <InputNumber placeholder='1' value={info.serving_size.serving} onChange={(e) => setInfo({type:'serving',value:{serving:e}})} />
                        <Select placeholder='Select unit' value={info.serving_size.serving_unit} onChange={(e) => setInfo({type:'serving',value:{serving_unit:e.target.value}})} >
                            {
                                units_list.map((unit, key) => (
                                    <option value={unit} key={key} >{unit}</option>
                                ))
                            }
                        </Select>
                    </Stack>
                </InputField>

                <Divider my={3} />

                <Heading size='md' >Nutrition Facts</Heading>

                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{calories:e}})} value={info.nutritional_facts.calories} placeholder='Required' label='Calories' isRequired={true} />
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{protein:e}})} value={info.nutritional_facts.protein} placeholder='Required' label='Protein (g)' isRequired={true}/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{total_fat:e}})} value={info.nutritional_facts.total_fat} placeholder='Required' label='Total Fat (g)' isRequired={true}/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{total_carbohydrates:e}})} value={info.nutritional_facts.total_carbohydrates} placeholder='Required' label='Total Carbohydrates (g)' isRequired={true}/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{saturated_fat:e}})} value={info.nutritional_facts.saturated_fat} placeholder='Optional' label='Saturated Fat (g)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{trans_fat:e}})} value={info.nutritional_facts.trans_fat} placeholder='Optional' label='Trans Fat (g)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{sodium:e}})} value={info.nutritional_facts.sodium} placeholder='Optional' label='Sodium (mg)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{dietary_fiber:e}})} value={info.nutritional_facts.dietary_fiber} placeholder='Optional' label='Dietary Fiber (g)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{sugars:e}})} value={info.nutritional_facts.sugars} placeholder='Optional' label='Sugars (g)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{added_sugars:e}})} value={info.nutritional_facts.added_sugars} placeholder='Optional' label='Added Sugars (g)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{calcium:e}})} value={info.nutritional_facts.calcium} placeholder='Optional' label='Calcium (%)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{iron:e}})} value={info.nutritional_facts.iron} placeholder='Optional' label='Iron (%)'/>
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{polyunsaturated_fat:e}})} value={info.nutritional_facts.polyunsaturated_fat} placeholder='Optional' label='Polyunsaturated Fat (g)'/> */}
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{monounsaturated_fat:e}})} value={info.nutritional_facts.monounsaturated_fat} placeholder='Optional' label='Monounsaturated Fat (g)'/> */}
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{cholesterol:e}})} value={info.nutritional_facts.cholesterol} placeholder='Optional' label='Cholesterol (mg)'/> */}
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{potassium:e}})} value={info.nutritional_facts.potassium} placeholder='Optional' label='Potassium (mg)'/> */}
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{sugar_alcohols:e}})} value={info.nutritional_facts.sugar_alcohols} placeholder='Optional' label='Sugar Alcohols (g)'/> */}
                {/* <InputNumber onChange={(e) => setInfo({type:'nutri',value:{vitamin_A:e}})} value={info.nutritional_facts.vitamin_A} placeholder='Optional' label='Vitamin A (%)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{vitamin_C:e}})} value={info.nutritional_facts.vitamin_C} placeholder='Optional' label='Vitamin C (%)'/>
                <InputNumber onChange={(e) => setInfo({type:'nutri',value:{vitamin_D:e}})} value={info.nutritional_facts.vitamin_D} placeholder='Optional' label='Vitamin D (%)'/> */}
            </form>
        </Box>
    )
}

export default CreateFood

const units_list = [
    'unit(s) (Slice, apple, etc.)',
    'mg',
    'g',
    'kg',
    'oz',
    'lb',
    'cup',
    'pnt',
    'gal',
    'l',
    'ml'
]