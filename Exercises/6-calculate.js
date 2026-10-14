'use strict';

function average (a, b){
  let res = (a + b) / 2
  //console.log (res)
  return res;
}

average (5, 2)


function square (x){
  let resSquare = (x * x);
  //console.log (resSquare)
  return resSquare; 
} 
square (5)


function cube (x){
  let resCube = (x ** 3)
  //console.log (resCube)
  return resCube;
}

cube (3)

function calculate(){
  let results = [];

for (let i = 0; i < 10; i++){
  let numbsSquare = square(i);
  let numbsCube = cube(i);   
  let numbsAverage = average (numbsSquare, numbsCube);
  
  results.push (numbsAverage); 
}

console.log (results)
return results;
}

calculate (4)
module.exports = { square, cube, average, calculate };
