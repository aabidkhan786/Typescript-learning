"use strict";
// Object declaration
let personDetails;
personDetails = {
    full_name: 'Ayyub Ruwaid Nader',
    phone_number: 88827121,
    email: "AyyubRuwaidNader@armyspy.com",
    isProgrammer: true
};
console.log(personDetails);
let Ayyub = {
    full_name: 'Ayyub Ruwaid Nader',
    phone_number: 88827121,
    email: "AyyubRuwaidNader@armyspy.com",
    isProgrammer: true,
    sayHi: (name) => `Hello, Mr. ${name}`
};
console.log(Ayyub.sayHi(Ayyub.full_name));
let Long_Shih = {
    full_name: 'Long Shih',
    phone_number: 6077344686,
    email: "LongShih@armyspy.com",
    isProgrammer: true,
    sayHi: (name) => `Hello, Mr. ${name}`
};
console.log(Long_Shih);
