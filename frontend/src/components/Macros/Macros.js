import React from 'react'
import { Flex, Text } from '@chakra-ui/react'



function Macros({ protein, carbs, fat, colors}) {
    console.log(protein)
    console.log(fat)
    console.log(carbs)
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
                <Text fontWeight='light' fontSize='xs' color={colors[0]} >{isNaN(carbs_percentage) ? 0 : carbs_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{carbs} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Carbs</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' color={colors[1]} >{isNaN(protein_percentage) ? 0 : protein_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{protein} g</Text>
                <Text fontWeight='semilight' fontSize='sm'>Protein</Text>
            </Flex>
            <Flex direction='column' alignContent='center' alignItems='center' lineHeight='1.1' >
                <Text fontWeight='light' fontSize='xs' color={colors[2]}>{isNaN(fat_percentage) ? 0 : fat_percentage}%</Text>
                <Text fontWeight='bold' fontSize='md' >{fat} g</Text>
                <Text fontWeight='semilight' fontSize='sm' >Fat</Text>
            </Flex> 
        </Flex>
    )
}

export default Macros
