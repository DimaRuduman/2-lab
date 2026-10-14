'use strict';

function rangeOdd (start, end){
    let numbers = [];
    let res;
    for (let i = start; i < end + 1; i++){
        if (i % 2 !== 0){
            numbers.push (i)
        } 
}
//console.log (numbers)
    return numbers;
}   
rangeOdd (15, 30)


module.exports = { rangeOdd };
