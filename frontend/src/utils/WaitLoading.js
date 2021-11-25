import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'

function WaitLoading({ loading, children }) {

    if (loading){
        return (
            <Center>
                <Spinner />    
            </Center>
        )
    }
    else{
        return(
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
}

export default WaitLoading
