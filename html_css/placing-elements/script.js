// console.log("sanitycheck");
(function () {
    var sideNav = document.getElementsByClassName("side-nav");
    var menuButton = document.getElementById("menu-button");
    var x = document.getElementById("x");
    var overlay = document.getElementsByClassName("overlay");

    menuButton.addEventListener("click", function () {
        sideNav[0].classList.add("on");
        overlay[0].classList.add("on");
        console.log(sideNav[0]);
    });

    x.addEventListener("click", function () {
        sideNav[0].classList.remove("on");
        overlay[0].classList.remove("on");
        console.log("bye");
    });

    overlay[0].addEventListener("click", function () {
        sideNav[0].classList.remove("on");
        overlay[0].classList.remove("on");
    });
})(); // eileens iife
