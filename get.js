// const person = {
//     name: 'Alice',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Wonderland'
//     }
//   };
  
// const path = 'address.city';
// const keys = path.split('.'); // ['address', 'city']
// let value = person;
// for (const key of keys) {
//   value = value[key];
// }
// console.log(value); // "Wonderland"
function get(src,path){
    const keys = path.split('.');
    let value = src;
    for (const key of keys){
        if (value[key] ===undefined ){
            return undefined;
        }
        value = value[key];
    }
    return value;
}
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)); // -> 'peekaboo'
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'
