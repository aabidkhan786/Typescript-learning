"use strict";
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam) {
    return 'The circumference is ' + (Math.PI * diam).toFixed(2);
}
console.log(circle(10));
// Define a function called perimeter that takes a side variable of type number and return a string but this time using the arrow function
const perimeter = (side) => {
    return 'The perimeter is : ' + (4 * side).toFixed(2);
};
console.log(perimeter(2.5));
// Return type : void
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
printHello();
//What is we have the optionable parameters 
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(10, 52));
console.log(add(10, 52, 85));
// Default paramter in TypeScript
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(2));
//Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// Rest Parameters
function SumOfArray(a, b, ...rest) {
    return a + b + rest.reduce((c, d) => c + d, 0);
}
console.log(SumOfArray(10, 25, 10, 254, 478, 102, 889));
const findFactorial = (value) => {
    let result = 1;
    if (value == 0) {
        console.log("The factorial of " + value + "! is: 1 ");
    }
    else {
        for (let j = 1; j <= value; j++) {
            result = result * j;
        }
        console.log("The factorial of " + value + "! is: " + result);
    }
};
findFactorial(12);
// IIFE : Immediately Invoked Function Expression
(function counter() {
    let i = 0;
    while (i <= 50) {
        console.log(i);
        i++;
    }
})();
