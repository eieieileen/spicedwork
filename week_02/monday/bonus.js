var totaler = function(getTotaler) {
    return function(num) {
        return num++;
    };

};

var totaler = getTotaler();
// Write a function that returns a function that can be called repeatedly and passed a number each time.
// Each time it is called it should return the sum of the number that is passed in
// and all other numbers that were passed in previous calls. That is,
// it should return the sum of all the numbers that were ever passed to it.

// var getCounter = function(num) {
//     return function() {
//         return num++;
//     };
// };
//  var totaler = getTotaler();
//  totaler(1); //1
//  totaler(2); //3
//  totaler(5); //8

// var counter = getCounter(3);
// counter(); //3
// counter(); //4
// counter(); //5