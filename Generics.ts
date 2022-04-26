function PrintData(data: any) {
    return data;
}

console.log(PrintData({ name: "Ruby Walker", age: 29, place: "Germany" }));         // By looking onto the paramter it seems like and object. Now let's check its type
console.log(PrintData(typeof ({ name: "Ruby Walker", age: 29, place: "Germany" })));

console.log(PrintData(["Ruby Walker", 29, "Germany"]));     // It looks like we have given the argument type of an array.
console.log(PrintData(typeof (["Ruby Walker", 29, "Germany"])));    //But the complier say it's look like an object. An actually it is Array is also an object but without the key value pairs.

// Now changing the data parameters
console.log(PrintData(typeof 25));          // Output will be number
console.log(PrintData(typeof "25"));        // String
console.log(PrintData(typeof false));       // boolean

// As we have the above data type of any so our argument can strings, numbers, booleans, array, objects.So now to change the type of arguments in the above functions.
