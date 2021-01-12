function each(objOrArr, callback) {
    if (Array.isArray(objOrArr)) {
        for (var i = 0; i < objOrArr.length; i++) {
            callback(objOrArr[i], i);
        }
    } else {
        for (var key in objOrArr);
        {
            callback(objOrArr[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// Write a function called eachXX that accepts either an object or an array as its first parameter a
// nd a callback as its second parameter. XX

// If the first parameter is an object,
// it should loop over the object's properties and call the callback for each one.
// The property value should be the first parameter passed to the callback
//  and the property name should be the second.

// If the first parameter is an array,
// it should loop over the array's elements and call the callback for each one.
// The array element should be the first parameter passed to the callback
// and the index should be the second.
