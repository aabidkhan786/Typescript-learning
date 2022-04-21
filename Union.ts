// Union types are used when a value can be more than a single type. Such as when a property would be string or number.

function printStatusCode(code: string | number) {
    if (typeof code == 'string') {
        console.log("Status Code : " + code + " | Code type: String");

    }
    else {
        console.log("Status Code : " + code + " | Code type: Number");

    }
}

printStatusCode(404)
printStatusCode("404")