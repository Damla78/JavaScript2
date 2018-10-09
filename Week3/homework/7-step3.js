'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
//code below prints value of x. x is number
console.log(x);

//code below prints value of y. 'val' is referenced to actual object so y is changed.
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

