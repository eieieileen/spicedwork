// exercise 1

function ex1(str) {
    document.querySelector(str).style.fontStyle = "italic";
    document.querySelector(str).style.textDecoration = "underline";
    document.querySelector(str).style.fontWeight = "bold";
}

ex1(".bottom-text");

function ex2(classStr) {
    var arr = [];
    var collect = document.getElementsByClassName(classStr);
    arr.push(collect);
    console.log(arr);
    return(arr);
}

ex2("scottish-text");


// // Write a function that expects a string representing
// // a class name to be passed as a parameter. XX
// // The function should return an array containing all the elements
// // in the document that have the class that was passed in.

function makeChange() {
    var newDiv = document.createElement("div");
    var content = document.createTextNode("AWESOME");

    newDiv.appendChild(content);


    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.left = "20px";
    newDiv.style.top = "100px";
    newDiv.style.fontSize = "200px";

    document.body.append(newDiv);
}

makeChange();

// Write a function that inserts an element into the body
// of the currently loaded page.
// That element should have fixed position,
// z-index of 2147483647,
// left of 20px, top of 100px, font-size of 200px,
// and contain the text 'AWESOME'.XX
