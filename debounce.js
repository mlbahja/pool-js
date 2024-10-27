function debounce(callback_function, del){
    let timedeley;
    return (...args) => {
        clearTimeout(timedeley)
         timedeley = setTimeout( () => {
            callback_function(...args);
    }, del);
    };
}
function opDebounce(callback_function, del,listenrcaling={}){
    let timedeley;
    return (...args) => {
        if (listenrcaling.leading && !timedeley){
            callback_function(...args);
        }
        clearTimeout(timedeley)
         timedeley = setTimeout( () => {
            callback_function(...args);
            
    }, del);
    };
}
