export const CheckPasswordsAreSame = (p1, p2) => {
    return p1 === p2
} 
export const CheckPassword = (inputtxt) => { 
    var passw = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
    if(inputtxt.match(passw)) { 
        return true;
    }
    else{ 
        return false;
    }
}

export const search_array = (str, list) => {
    console.log(str)
    let new_list = list.filter(obj => obj.name.toLowerCase().includes(str.toLowerCase()) )
    return new_list
}