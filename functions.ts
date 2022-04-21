// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
    return 'The circumference is ' + (Math.PI * diam).toFixed(2);
}

console.log(circle(10));

// Define a function called perimeter that takes a side variable of type number and return a string but this time using the arrow function
const perimeter = (side: number): string => {
    return 'The perimeter is : ' + (4 * side).toFixed(2);
}

console.log(perimeter(2.5));
