import { useReducer, useEffect, useState, useContext } from 'react'
import { create_meal as create } from '../../../utils/Fetch_Functions/Meal'
import { UserContext } from '../../../App'

const useCreateMeal = (detailsClose, detailsOnOpen) => {
    const [ meal_info, setMealInfo ] = useReducer(reducer, initial_info)
    const [ editFood, setEditFood ] = useState(0)
    const { user } = useContext(UserContext)

    useEffect(() => {  
        if (meal_info.recipe.length > 0 && !meal_info.hasItems){
            setMealInfo({hasItems:true})
        }   
        else if (meal_info.recipe.length === 0 && meal_info.hasItems){
            setMealInfo({hasItems:false})
        }
    }, [meal_info])

    const create_meal = () => {
        setMealInfo({isCreating:true})
        let meal = {}
        meal.name = meal_info.name
        meal.description = meal_info.description
        meal.recipe = meal_info.recipe.map(food => ({food:food._id, serving_size:food.serving_size}))
        meal.creator = user._id
        create({body: meal})
        .then(json => {
            console.log(json)
            setMealInfo({...initial_info, createSuccess:true, openAlert:true})
        })
        .catch(err => console.log(err))
    }

    const open_details = (food) => {
        let food_id = food._id
        let index = meal_info.recipe.findIndex(obj => obj._id === food_id)
        let unit = meal_info.recipe[index].serving_size.serving_unit
        let number = meal_info.recipe[index].serving_size.number_of_servings
        let serving = meal_info.recipe[index].serving_size.serving
        setEditFood({_id: food_id, unit:unit, number: number, serving:serving })
        detailsOnOpen()
    }

    const save_edit = (food) => {
        let recipe_foods = [...meal_info.recipe] // List with all ingredients and serving sizes
        let macros = {...meal_info.macros}
        let calories = meal_info.calories
        let chartData = [...meal_info.chartData]
        let index = recipe_foods.findIndex(obj => obj._id === food._id)
        calories -= parseFloat(recipe_foods[index].nutritional_facts.calories)
        macros = {
            protein: (parseFloat(macros.protein) - parseFloat(recipe_foods[index].nutritional_facts.protein)).toFixed(1),
            carbs: (parseFloat(macros.carbs) - parseFloat(recipe_foods[index].nutritional_facts.total_carbohydrates)).toFixed(1),
            fat: (parseFloat(macros.fat) - parseFloat(recipe_foods[index].nutritional_facts.total_fat)).toFixed(1)
        }
        recipe_foods[index].nutritional_facts = {...recipe_foods[index].nutritional_facts, ...food.nutritional_facts}
        recipe_foods[index].serving_size = {...recipe_foods[index].serving_size, ...food.serving_size}
        
        calories += parseFloat(recipe_foods[index].nutritional_facts.calories)
        macros = {
            protein: (parseFloat(macros.protein) + parseFloat(recipe_foods[index].nutritional_facts.protein)).toFixed(1),
            carbs: (parseFloat(macros.carbs) + parseFloat(recipe_foods[index].nutritional_facts.total_carbohydrates)).toFixed(1),
            fat: (parseFloat(macros.fat) + parseFloat(recipe_foods[index].nutritional_facts.total_fat)).toFixed(1)
        }
        chartData[0].value = macros.carbs * 4
        chartData[1].value = macros.protein * 4
        chartData[2].value = macros.fat * 9
        setMealInfo({
            recipe: recipe_foods,
            calories:calories,
            macros: macros,
            chartData: chartData
        })
        detailsClose()
    }

    const add_food = (lists) => {
        const { food_list, idList } = lists
        let calories = 0
        let macros = {
            protein:0.0,
            carbs:0.0,
            fat:0.0
        }
        let chartData = [{name:'Carbs', value:0.0}, {name:'Protein', value:0.0}, {name:'Fat', value:0.0},]
        console.log(food_list)
        //Looping through all items to be added
        food_list.forEach(food => {
            calories += parseFloat(food.nutritional_facts.calories)
            macros.protein = (parseFloat(macros.protein) + parseFloat(food.nutritional_facts.protein)).toFixed(1)
            macros.carbs = (parseFloat(macros.carbs) + parseFloat(food.nutritional_facts.total_carbohydrates)).toFixed(1)
            macros.fat = (parseFloat(macros.fat) + parseFloat(food.nutritional_facts.total_fat)).toFixed(1)
        })

        //Setting up pie chart
        chartData[0].value = macros.carbs * 4
        chartData[1].value = macros.protein * 4
        chartData[2].value = macros.fat * 9
        setMealInfo({
            items: idList,  // This is a list
            recipe: food_list,       // This will show t
            calories: calories,
            macros: macros,
            chartData:chartData
        })
    }

    return { meal_info, setMealInfo, create_meal, editFood, save_edit, open_details, add_food }
} 

// description: "Organic Chia Seeds"
// isMeal: false
// name: "Chia Seeds"
// nutritional_facts: {calories: '60', total_fat: '4', saturated_fat: '', polyunsaturated_fat: '', monounsaturated_fat: '', …}
// serving_size: {serving: '12', serving_unit: 'g', number_of_servings: '1'}
// _id: "61d78af6c192881fc539b263"

const initial_info = {
    name:'',
    description:'',
    items:[],       // ID of foods
    recipe: [],
    calories:0,
    macros:{
        protein: 0.0,
        carbs: 0.0,
        fat: 0.0
    },
    chartData:[
        {
            name:'Carbs',
            value:0.0
        },
        {
            name:'Protein',
            value:0.0
        },
        {
            name:'Fat',
            value:0.0
        }
    ],
    isCreating:false,
    openAlert:false,
    createSuccess:false,
    hasItems:false,
    edit: false
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export default useCreateMeal