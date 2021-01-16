console.log("sanitycheck");


var movingDiv = document.getElementById("movingDiv");
console.log("movingDiv");

var mousemoveHandler = function(event) {
    var x = event.clientX;
    var y = event.clientY;
    movingDiv.style.top = (y - 50) + "px";
    movingDiv.style.left = (x - 50) + "px";
    console.log("moving around", x, y);
};

document.addEventListener("mousemove", mousemoveHandler);
