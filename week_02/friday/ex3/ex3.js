console.log("sanitycheck");

var colorDiv = document.getElementById("colorDiv");

colorDiv.addEventListener("mousedown", function () {
    var randomRed = Math.floor(Math.random() * 255);

    var randomBlue = Math.floor(Math.random() * 255);

    var randomGreen = Math.floor(Math.random() * 255);
    colorDiv.style.backgroundColor =
        "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")";
});

colorDiv.addEventListener("mouseup", function () {
    var randomRed = Math.floor(Math.random() * 255);

    var randomBlue = Math.floor(Math.random() * 255);

    var randomGreen = Math.floor(Math.random() * 255);
    colorDiv.style.backgroundColor =
        "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")";
});

// Make a page that has on it an element that is 100px by 100px in size
// and has a solid black border. XX
// When the user mouses down on this box,
// its background should change to a randomly selected color.
// When the user mouses up on it,
// its background should change to another
// randomly selected color.

// 3 variables red green blue en die moeten veranderen naar andere random
