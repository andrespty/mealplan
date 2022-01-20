import React from 'react'
import PropTypes from 'prop-types'
import { get_calories_from_food } from '../utils/ConversionFunctions'

export const withDataHandler = (Component, obj, resourceName) => {
    return props => {

        const calories = get_calories_from_food(obj)
        const serving_size = `${obj.serving_size.serving * obj.serving_size.number_of_servings} ${obj.serving_size.serving_unit}`

        const data_handled = {
            [resourceName]: {
                ...obj,
                calories:calories,
                serving_size:serving_size
            }
        }

        return <Component {...props} {...data_handled} />
    }
}

