import { darken } from "@chakra-ui/theme-tools"

export const Button = {
    baseStyle: {

    },
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary:{
            bg: 'primary.300',
            color:'white',
            _hover:{
                bg: darken('primary.300', 5),
                _disabled:{
                    bg: 'primary.300',
                    color:'white',
                },
            },
        },
        primaryOutline:{
            bg: 'transparent',
            color: 'primary.300',
            _hover:{
                bg: 'primary.50'//whiten('primary.100',20)
            },
            border:'1px solid'
        },
        primaryGhost:{
            bg:'transparent',
            color:'black',
            _hover:{
                bg: 'primary.50',
                color:'primary.500'
            }
        }
    },
    // The default `size` or `variant` values
    defaultProps: {},
}