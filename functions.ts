// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
    return 'The circumference is ' + (Math.PI * diam).toFixed(2);
}

console.log(circle(10));