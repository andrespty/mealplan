import React from 'react'
import { get_calories_from_food } from '../utils/ConversionFunctions'

function DataHandler({ children, obj, resourceName }) {

    

    const calories = get_calories_from_food(obj)
    const serving_size = `${obj.serving_size.serving * obj.serving_size.number_of_servings} ${obj.serving_size.serving_unit}`

    const data_handled = {
        ...obj,
        calories: calories,
        serving_size:serving_size
    }

    return (
        <>

            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)){
                        return React.cloneElement(child, { [resourceName]: data_handled })
                    }
                    return child
                })
            }
            
        </>
    )
}

export default DataHandler
