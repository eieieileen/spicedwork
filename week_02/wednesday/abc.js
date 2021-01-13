function invertCase(str) {
    for (var i = 0; i < str.length; i++) {
        if (str === str[i]) {
            str[i] = str.toUpperCase;
        } else {
            str[i] = str.toLowerCase;
        }
        console.log(str);
    }
   
}
// for..in loop


invertCase("abc", "ABC");

// var convertString = function (str) {
//     var s = "";
//     var i = 0;
//     while (i < str.length) {
//         var n = str.charAt(i);
//         if (n == n.toUpperCase()) {
//             // *Call* toLowerCase
//             n = n.toLowerCase();
//         } else {
//             // *Call* toUpperCase
//             n = n.toUpperCase();
//         }

//         i += 1;
//         s += n;
//     }
//     console.log(s);
// };

// convertString("lower UPPER");


// console.log('alfabet'.toUpperCase()); // 'ALFABET'
// console.log('ALFABET'.toLowerCase()); // 'alfabet'

// Write a function called invertCase that expects a string as a parameter. XX
// This function should return a new stringXX with all the same characters as
// the string that was passed in but with the cases of the alphabetic characters switched.
// Uppercase characters should become lowercase and lowercase letters should become uppercase.
// Characters that are not alphabetic should not change.
// The toUpperCase and toLowerCase methods that all strings have will come in handy here.

// second:
// if you pass is "abc" it should return "ABC", if you pass it "abC" it should return "ABc"

// function with .toUpperCase() and .toLowerCase() ((maybe with reverse()?))
// create a new string, loop through the string, call to uppercase or to lowercase and if its uppercase you put lowercase on it.
