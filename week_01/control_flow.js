var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var city in a) {
    // console.log(a.city);
    //country
    // console.log(city);
    //city
    b[a.city] = city;
}

// console.log(b);

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// for (var p in obj) {
//     console.log("The value of obj." + p + " is " + obj[p]);
// }

// Then create a new empty object bXX and use a for..in loop to iterate over all of a's properties.
// Give b properties whose names are the values from a and whose values are the property names from a.
// The result should be an object that looks like this:
