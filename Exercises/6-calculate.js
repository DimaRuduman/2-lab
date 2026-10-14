'use strict';

const average = (a, b) => (a + b) / 2
const square = x => x **2 ;
const cube = x => x ** 3

function calculate(){
  let results = [];

for (let i = 0; i < 10; i++){
  const result = average (square(i), cube(i)) 
  results.push (result); 
}

//console.log (results)
return results;
}

//calculate (4)
module.exports = { square, cube, average, calculate };
