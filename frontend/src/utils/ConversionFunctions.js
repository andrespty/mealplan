const convert = require('convert-units')

export const get_calories_conversion = ({ attr, og_serv_unit, new_serv_unit, og_n_serv, new_n_serv, og_serv, new_serv }) => {
    let n_servings_ratio = new_n_serv / og_n_serv
    let servings_ratio = new_serv / og_serv
    let conversion = convert(1).from(new_serv_unit).to(og_serv_unit)

    return (attr * n_servings_ratio * servings_ratio * conversion)
}

export const get_calories_from_meal = (meal) => {
    let calories = 0
    meal.recipe.forEach((food) => {
        calories += get_calories_conversion({
            attr:           parseFloat(food.food.nutritional_facts.calories),
            og_n_serv:      parseFloat(food.food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.food.serving_size.serving),
            new_n_serv:     parseFloat(food.serving_size.number_of_servings),
            new_serv:       parseFloat(food.serving_size.serving),
            new_serv_unit:  food.serving_size.serving_unit,
            og_serv_unit:   food.food.serving_size.serving_unit,
        })
    })
    return calories
}

export const convert_food_with_serving_sizes = (food, serving_size) => {
    const x = ['calories', 'protein', 'total_carbohydrates', 'total_fat']
    let updated_food = {...food}
    updated_food.serving_size = serving_size
    x.forEach(att => {
        console.log(att)
        updated_food.nutritional_facts[att] = get_calories_conversion({
            attr:           parseFloat(food.nutritional_facts[att]),
            og_n_serv:      parseFloat(food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.serving_size.serving),
            og_serv_unit:   food.serving_size.serving_unit,
            new_n_serv:     parseFloat(serving_size.number_of_servings),
            new_serv:       parseFloat(serving_size.serving),
            new_serv_unit:  serving_size.serving_unit,
        })
    })

    return updated_food
}

export const get_calories_from_food = (food) => {
    return food.nutritional_facts.calories
}

export const get_macros_from_meal = (meal) => {
    let protein = 0
    let carbs = 0
    let fat = 0
    meal.recipe.forEach((food) => {
        protein += get_calories_conversion({
            attr:           parseFloat(food.food.nutritional_facts.protein),
            og_n_serv:      parseFloat(food.food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.food.serving_size.serving),
            new_n_serv:     parseFloat(food.serving_size.number_of_servings),
            new_serv:       parseFloat(food.serving_size.serving),
            new_serv_unit:  food.serving_size.serving_unit,
            og_serv_unit:   food.food.serving_size.serving_unit,
        })
        carbs += get_calories_conversion({
            attr:           parseFloat(food.food.nutritional_facts.total_carbohydrates),
            og_n_serv:      parseFloat(food.food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.food.serving_size.serving),
            new_n_serv:     parseFloat(food.serving_size.number_of_servings),
            new_serv:       parseFloat(food.serving_size.serving),
            new_serv_unit:  food.serving_size.serving_unit,
            og_serv_unit:   food.food.serving_size.serving_unit,
        })
        fat += get_calories_conversion({
            attr:           parseFloat(food.food.nutritional_facts.total_fat),
            og_n_serv:      parseFloat(food.food.serving_size.number_of_servings),
            og_serv:        parseFloat(food.food.serving_size.serving),
            new_n_serv:     parseFloat(food.serving_size.number_of_servings),
            new_serv:       parseFloat(food.serving_size.serving),
            new_serv_unit:  food.serving_size.serving_unit,
            og_serv_unit:   food.food.serving_size.serving_unit,
        })
    })
    return { protein, carbs, fat}
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