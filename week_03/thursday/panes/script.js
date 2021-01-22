// console.log("sanity")
(function () {
    var container = $(".container");
    var top = $(".top");
    console.log("This should be the top picture:", top);
    var bottom = $(".bottom");
    console.log("This should be the bottom picture:", bottom);
    var slider = $(".slider");
    console.log("This is the schlider:", slider);
    var sliding = false;
    var x;

    slider.on("mousedown", function (event) {
        console.log("mouse down");
        event.preventDefault();
        sliding = true;
    });

    slider.on("mouseup", function (event) {
        event.preventDefault();
        sliding = false;
    });

    container.on("mousemove", function (event) {
        console.log("mousemove");
        if (sliding == true) {
            x = event.offsetX;
            slider.eq(0).css({ left: x - 20 + "px" });
            top.eq(0).css({ width: x - 20 + "px" });
        }
        if (x == 600) {
            sliding = false;
        }
        if (x == 20) {
            sliding = false;
        }
    });
})(); // eileens iife
