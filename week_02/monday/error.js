function number(num) {
    if (num <= 0 || NaN) {
        console.log("ERROR");
    } else if (num >= 1000000) {
        console.log(num);
    } else if (num === 1000000) {
        return(num);
    } else {
        number(num * 10);
    }
}

number(1880);


// function countdown(num) {
//     console.log(num);
//     if (num === 0) {
//         return; // this will end the function
//     } else {
//         countdown(num - 1);
//     }
// }

// Write a function that expects a number as an argument. XX
// If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. XX
// If the number that is passed in is greater than or equal to 1000000 it should simply return the number. XX
// Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal
// to 1000000 and;
