'use strict';

function range (start, end){
    let numbers = [];
    for (let i = start; i < end + 1; i++){
        numbers.push (i)
}
//console.log (numbers)
    return numbers;
}   
range (15, 30)

module.exports = { range }
