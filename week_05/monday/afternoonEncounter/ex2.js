// Write a generator function XX
// that expects to be passed an array of values. XX
// When next is called on the iterator object 
// that this function returns, 
// the values in the array should be yielded in reverse order. 
// The array that is passed to the generator function 
// should stay in its original order.

function* getFunc(arr) {
    let newArr = [...arr];
    yield newArr.reverse();
}
// getFunc([12, 58]);

let iterator = getFunc([12, 15]);
let it1 = iterator.next();
console.log(it1);