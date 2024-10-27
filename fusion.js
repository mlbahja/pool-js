const fusion = (obj1, obj2) => {
    const result = { ...obj1 };
  
    for (let [key, value] of Object.entries(obj2)) {
      if (Object.hasOwn(obj1, key)) {

        console.log()
        if (typedyalo.obj(obj1[key]) && typedyalo.obj(value)) {
          result[key] = fusion(obj1[key], value);

        } else if (typedyalo.arr(obj1[key]) && typedyalo.arr(value)) {
          result[key] = [...obj1[key], ...value];
        } else if (typedyalo.num(obj1[key]) && typedyalo.num(value)) {
          result[key] = obj1[key] + value;
        } else if (typedyalo.str(obj1[key]) && typedyalo.str(value)) {
          result[key] = `${obj1[key]} ${value}`;
        } else {
          result[key] = value;
        }
      } else {
        result[key] = value;
      }
    }
  
    return result;
  };
  
  const typedyalo = {
    num: (cont) => typeof cont === "number",
    str: (cont) => typeof cont === "string",
    arr: Array.isArray,
    obj: (cont) => typeof cont === "object" && cont !== null && !Array.isArray(cont),
    fun: (cont) => typeof cont === "function"
  }
const obj1 = {
    'name' : "mUSTAPHA",
    'age' : 19,
}
const obj2 = {
    'name' : 'lbahja',
    'age': 28,
}
console.log(fusion(obj1,obj2));