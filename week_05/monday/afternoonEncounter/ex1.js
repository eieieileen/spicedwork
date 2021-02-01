// Implement FizzBuzz using a generator function and a for...of loop.
// First, write a generator function that yields the numbers between 1 and 100 in order with the following exceptions
// If the number is divisible by 3, yield the string "fizz"
// If the number is divisible by 5, yield the string "buzz"
// If the number is divisible by both 3 and 5, yield the string "fizzbuzz"
// Then write a for...of loop that loops through the values yielded by the generator function and logs each one#

function* fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            yield "fizz";
        } if (i % 5 == 0) {
            yield "buzz";
        } if (i % 3 && i % 5) {
            yield "fizzbuzz";
        } else {
            yield i;
        }
    }
}

for (let val of fizzbuzz()) {
    console.log("iterator", val);
}


// function fizzbuzz() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             if (i % 5 == 0) {
//                 console.log("fizzbuzz");
//             } else {
//                 console.log("fizz");
//             }
//         } else {
//             if (i % 5 == 0) {
//                 console.log("buzz");
//             } else {
//                 console.log(i);
//             }
//         }
//     };}
