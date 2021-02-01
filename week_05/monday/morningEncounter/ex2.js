function functionWithArgs(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    console.log(newArr);
    return newArr;

}

functionWithArgs(["Enter"], ["Shikari"]);

// Write a function that takes two arrays as arguments 
// and returns a new array containing all of the 
// items in the two arrays passed to it. 