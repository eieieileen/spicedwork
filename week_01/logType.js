function logType(arg) {
    if (typeof arg == "undefined") {
        console.log("undefined!");
    } else if (arg === null) {
        console.log("null!");
    } else if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg == "bigint") {
        console.log("bigint!");
    } else if (typeof arg == "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg == Object) {
        console.log("object!");
    } else if (isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg == "number") {
        console.log("number!");
    } else if (typeof arg == "boolean") {
        console.log("boolean!");
    } else {
        console.log("I have no idea!");
    }
}

logType(23);



// Write a function named logTypeX that expects a single argumentX and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

// "undefined!"
// "null!" X
// "number!"
// "not a number!" X
// "string!"
// "boolean!"
// "bigint!"
// "function!"
// "object!"
// "array!" X
// "I have no idea!
