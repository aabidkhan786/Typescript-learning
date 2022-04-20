// Declaring Array in Typescript of String Types

const names: string[] = [];
names.push("Benjamin")
names.push("Susan M. Gorman")
names.push("Stephanie L. McVicker")

console.log(names);

// Readonly keyword prevent array from being changed
const name_stack1: readonly string[] = ["Jesus P. Dutra", "Camille V. Miles", "Bill J. Newton", "Annette A. White"]

//trying to add name in the array
// name_stack1.push("Lisa D. Hanson")
//The push method above will create an error as we use readonly method, so we can't push a string into it.

console.log(name_stack1)