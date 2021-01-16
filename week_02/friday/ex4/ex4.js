console.log("sanitycheck");

var outerDiv = document.getElementById("outerDiv");

outerDiv.addEventListener("click", function () {
    var randomRed = Math.floor(Math.random() * 255);

    var randomBlue = Math.floor(Math.random() * 255);

    var randomGreen = Math.floor(Math.random() * 255);
    outerDiv.style.backgroundColor =
        "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")";
});

var innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("click", function (e) {
    e.stopPropagation();
    var randomRed = Math.floor(Math.random() * 255);

    var randomBlue = Math.floor(Math.random() * 255);

    var randomGreen = Math.floor(Math.random() * 255);
    innerDiv.style.backgroundColor =
        "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")";
});
