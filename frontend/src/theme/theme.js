import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { Tabs, Tab } from './Tabs'

export const theme = extendTheme({
    colors:{
        primary:{
          50: '#ffe8e0',
          100: '#ffc2b2',
          200: '#fe9c81',
          300: '#fc744f', // Primary
          400: '#fa4d1e',
          500: '#e13306',
          600: '#b02703',
          700: '#7e1b01',
          800: '#4d0f00',
          900: '#1f0300',
        },
        primaryTabs:{
          50:'#ffe8e0',
          100:'#ffc2b2',
          600:'#fc744f'
        }
    },
    components: {
      Button,
      Tabs,
      Tab
    }
})


// {
//     50: '#ffe8e0',
//     100: '#ffc2b2',
//     200: '#fe9c81',
//     300: '#fc744f',
//     400: '#fa4d1e',
//     500: '#e13306',
//     600: '#b02703',
//     700: '#7e1b01',
//     800: '#4d0f00',
//     900: '#1f0300',
//   }