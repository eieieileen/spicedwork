function Rectangle(w, h) {  // rechthoek
    this.width = w;
    this.height = h; 
    function getArea() {
        this.width * this.height;
    }
}
        
    

var getArea = new Rectangle(3, 6);

console.log(getArea);

function Square(n) {
    this.width = n;
    this.height = n;
}

Square();

//   var germany = new Country('Germany');
// Write a constructor called Rectangle XX
// that accepts two numbers (width and height) as parameters. XX
// Rectangle instances should have a method called getArea 
// that returns the instance's width multiplied by its height. 


// Write another constructor called Square that accepts one number 
// (which will serve as both width and the height) as a parameter. 
// Instances of Square should also have a getArea method but you should not rewrite the getArea function 
// you wrote for Rectangle. 
// Square instances should use the same getArea method that Rectangle instances do.


// function Rectangle(w, h) {
// 	this.width = w;
// 	this.height = h;
// }
	
// function Square(n) {
//     this.width = n;
//     this height = n;
// }

// both square instances of rectangle get area needs to run function
// return this.width * this height; only allowed to use this line of code once. 
// something with prototypes. many other ways with call and apply etc.