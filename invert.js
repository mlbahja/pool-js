function invert(obj){
 //return obj[Key,value];   
 const newone = {};           
             for (let Key in obj){
                //  key = newone.push(newone[Key])
                if (obj.hasOwnProperty(Key)){
                 newone[obj[Key]] = Key;
                }
             }
             return newone;
            // console.log(newone);
}
const a = {
    'Spider-Man': 'name',
    '23': 'age',
    'New York': 'city',
    'true': 'isHero'
  };
  console.log(invert(a));