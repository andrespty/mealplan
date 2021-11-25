import { useEffect } from "react"
import { get_my_food } from "../../../utils/FetchFunctions"

const useListMyFood = (userID) => {
    useEffect(() => {
        get_my_food({userID: userID})
        .then(json => console.log(json))
    })
}

export default useListMyFood