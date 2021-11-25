const assert = require('assert')
const Food = require('../models/food.model')
describe('Food collection', () => {

    it('Saves food to databse', (done) => {
        let food = new Food(food_test)

        food.save()
        .then(response => {
            assert(food.isNew === false)
            done()
        })
    })

})

const food_test = {
    name:'',
    description:'',
    serving_size:{
        serving: 0.0,
        serving_unit: '',
        servings_per_container: 1.0,
    },
    nutritional_facts:{
        calories:'',
        total_fat:'',
        saturated_fat:'',
        polyunsaturated_fat:'',
        monounsaturated_fat:'',
        trans_fat:'',
        cholesterol:'',
        sodium:'',
        potassium:'',
        total_carbohydrates:'',
        dietary_fiber:'',
        sugars:'',
        added_sugars:'',
        sugar_alcohols:'',
        protein:'',
        vitamin_A:'',
        vitamin_C:'',
        vitamin_D:'',
        calcium:'',
        iron:''
    },
}