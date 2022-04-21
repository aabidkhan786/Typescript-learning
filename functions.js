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
