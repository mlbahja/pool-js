function pick(obj, arr){
    if (typeof arr == "string") {
        arr = [arr]
    }
    const result = {};
    for (var [key, value] of Object.entries(obj)){
       if (arr.includes(key)) {
        result[key] = value
       }
    }
    return result
}
function omit(obj, arr) {
    if (!Array.isArray(arr)) {
        arr = [arr]
    }

    let result = {}
    for (let [key, value] of Object.entries(obj)) {
        if (!arr.includes(key)) {
            result[key] = value
        }
    }
    return result
}
const a = {
    'name': "Mustapha",
    'age': 24,
}
console.log(pick(a,'name'));