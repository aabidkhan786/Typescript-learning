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

// Return type : void
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}
printHello()

//What is we have the optionable parameters 
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log(add(10, 52));
console.log(add(10, 52, 85));

// Default paramter in TypeScript
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(2));

//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));
