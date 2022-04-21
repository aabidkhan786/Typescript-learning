// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam) {
    return 'The circumference is ' + (Math.PI * diam).toFixed(2);
}
console.log(circle(10));
// Define a function called perimeter that takes a side variable of type number and return a string but this time using the arrow function
var perimeter = function (side) {
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
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2));
//Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
