"use strict";
// Primitive Data Type
let x = 2;
let y = 1;
console.log("Before value: x = " + x + " y = " + y);
x = y;
y = 10;
console.log("After value: x = " + x + " y = " + y);
// Even though we have changed the value of x still we don't have the value of x to be changed. Let's try this out with the help of Refernce Data Type
// Reference Data Type
let dataValue1 = { x: 10, y: 20 };
let dataValue2 = dataValue1;
console.log("Before value: x = " + dataValue1.x + " y = " + dataValue1.y);
dataValue1.y = 200;
console.log("After value: x = " + dataValue2.x + " y = " + dataValue2.y);
