import { useEffect } from "react"
import { get_food_details } from "../../../utils/FetchFunctions"

const useFoodDetails = (foodID) => {

    useEffect(() => {
        get_food_details({foodID:foodID})
        .then(response => {
            console.log(response)
        })

    })
    

}

export default useFoodDetails