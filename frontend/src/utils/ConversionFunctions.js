const convert = require('convert-units')

export const get_calories = ({ attr, og_serv_unit, new_serv_unit, og_n_serv, new_n_serv, og_serv, new_serv }) => {
    let n_servings_ratio = new_n_serv / og_n_serv
    let servings_ratio = new_serv / og_serv
    let conversion = convert(1).from(new_serv_unit).to(og_serv_unit)

    return (attr * n_servings_ratio * servings_ratio * conversion)
}