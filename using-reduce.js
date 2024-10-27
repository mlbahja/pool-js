function adder(arry, value) { 
    return arry.reduce( 
        (ste, item) => ste + item, 
        value === undefined ? 0 : value 
    ); 
} 
 
function sumOrMul(arry, value) { 
    return arry.reduce( 
        (ste, item) => { 
            if (item % 2 === 0) { 
                return ste * item; 
            } else { 
                return ste + item; 
            } 
        }, 
        value === undefined ? 0 : value 
    ); 
} 
 
function funcExec(arry, value) {    
    return arry.reduce(  
        (ste, item) => {  
            if (typeof item === "function") { 
                return item(ste, value); 
            } else { 
                return ste; 
            } 
        },   
        value === undefined ? 0 : value  
    );  
} 