function Rectangle(w, h) {
    // rechthoek with Pascal notation
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
        // console.log(getArea);
    };
}

var rectangle2 = new Rectangle(3, 6);
console.log(rectangle2.getArea());

// Rectangle.prototype.getArea = "getArea";
function Square(n) {
    this.width = n;
    this.height = n;
}

Square.prototype.getArea = rectangle2.getArea;
var square2 = new Square(3);
square2.getArea();

console.log(square2.getArea());
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
