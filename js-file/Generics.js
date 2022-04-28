"use strict";
function PrintData(data) {
    return data;
}
console.log(PrintData({ name: "Ruby Walker", age: 29, place: "Germany" })); // By looking onto the paramter it seems like and object. Now let's check its type
console.log(PrintData(typeof ({ name: "Ruby Walker", age: 29, place: "Germany" })));
console.log(PrintData(["Ruby Walker", 29, "Germany"])); // It looks like we have given the argument type of an array.
console.log(PrintData(typeof (["Ruby Walker", 29, "Germany"]))); //But the complier say it's look like an object. An actually it is Array is also an object but without the key value pairs.
// Now changing the data parameters
console.log(PrintData(typeof 25)); // Output will be number
console.log(PrintData(typeof "25")); // String
console.log(PrintData(typeof false)); // boolean
// As we have the above data type of any so our argument can strings, numbers, booleans, array, objects.So now to change the type of arguments in the above functions.
function print_data(data) {
    return data;
}
console.log(print_data({ name: "Ruby Walker", age: 29, place: "Germany" }));
// As you can see we have declared the functions to object type, argument to be object type and the return value to be object type.
console.log(print_data("Ruby Walker"));
console.log(typeof (print_data("Ruby Walker")));
console.log(print_data(typeof ("Ruby Walker")));
// Now we have the functions to be string type, argument to be string types and return value to be of string types.
console.log(print_data(625));
console.log(typeof (print_data(625)));
console.log(print_data(typeof (625)));
// Now we have the functions to be numbers type, argument to be numbers types and return value to be of numbers types.
console.log(print_data(true));
console.log(typeof (print_data(true)));
console.log(print_data(typeof (true)));
// The same way goes for the functions to be of boolean type, argument to be boolean types and return value to be of boolean types.
// So, Generics allow us to create reusable blocks of code which can be used for different types. 
// In the above functions we have the basic generic type but now what if we want to have it to be explicitly typed.
function Print_data(data) {
    return data;
}
// console.log(Print_data(25)); 
// If i try to printout the result it will error out error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log(Print_data("Tony L. Chase"));
// As we can see the above function is explicitly string typed. If we try to run out with other parameters then it will generate the compilation error.
