let functionWithArgs = (arr) => {
    let newArr = [...arr];
    newArr.reverse();
    console.log(newArr);
    console.log(arr);
};

// function functionWithArgs(arr) {
//     let newArr = arr.reverse();
//     console.log(newArr);
// }

functionWithArgs([1, 2, 3, 2938, 239]);
// Write a function that takes an array as an argument 
// and returns a new array containing all of the 
// items that are in the array that was passed 
// in but in reverse order.