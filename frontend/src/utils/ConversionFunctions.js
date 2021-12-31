const convert = require('convert-units')

export const get_calories = ({ attr, og_serv_unit, new_serv_unit, og_n_serv, new_n_serv, og_serv, new_serv }) => {
    let n_servings_ratio = new_n_serv / og_n_serv
    let servings_ratio = new_serv / og_serv
    let conversion = convert(1).from(new_serv_unit).to(og_serv_unit)

    return (attr * n_servings_ratio * servings_ratio * conversion)
}

export const get_calories_from_meal = (meal) => {
    console.log(meal)
    let calories = 0
    meal.recipe.forEach((food) => {
        calories += parseFloat(food.food.nutritional_facts.calories)
        console.log(calories)
    })
    return calories
}

export const get_calories_from_food = (food) => {
    return food.nutritional_facts.calories
}

// creator: "61985a8c39d3c84eb6a70a2a"
// description: "This is the first meal."
// isMeal: true
// name: "First meal"
// recipe: (2) [{…}, {…}]
// _id: "61bbc7812013d05998625f63"


// food: {serving_size: {…}, nutritional_facts: {…}, isMeal: false, _id: '61ad404529788c6eb016a72c', name: 'Almonds', …}
// serving_size: {number_of_servings: '50', serving: '1', serving_unit: 'g'}
// _id: "61bbc7812013d05998625f64"