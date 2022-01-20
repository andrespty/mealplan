import React from 'react'
import { Spinner } from '@chakra-ui/react'

function LoadingData({ children, isLoading }) {

    return (
        <>

        {
            isLoading 
            ? 
                <Spinner />
            :
                React.Children.map(children, child => {
                    if (React.isValidElement(child)){
                        return React.cloneElement(child)
                    }
                    return child
                })
        }
            
        </>
    )
}

export default LoadingData
