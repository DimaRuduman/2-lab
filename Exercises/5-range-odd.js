'use strict';

function rangeOdd (start, end){
    let numbers = [];
    for (let i = start; i < end + 1; i++){
        if (i % 2 == 1 )
        numbers.push (i)
}
console.log (numbers)
    return numbers;
}   
rangeOdd (15, 30)


module.exports = { rangeOdd };
