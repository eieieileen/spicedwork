function getLessThanZero(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

getLessThanZero([1, 2, 3, -7, -4]);