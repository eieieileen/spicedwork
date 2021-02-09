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


    
    //model dialog and JQ starting:
    var popUpX = $("#popUpX");
    // console.log("hier komt het kruisje :", popUpX);
    var popUp = $(".popUp");
    // console.log("pop up: ", popUp);
    var overlayPop = $("#overlayPopup");
    // console.log("popOverlay :", overlayPop);
    $("document").ready(function () {
        setTimeout(function() {
            popUp.eq(0).css({visibility: "visible"});
            overlayPop.eq(0).css({visibility: "visible"});
        }, 1000); // works
    });

    popUpX.on("click", function () {
        console.log("now i should click"); // works gr8
        popUp.eq(0).css({ visibility: "hidden" });
        overlayPop.eq(0).css({ visibility: "hidden" });
    }); // works

    // $("#boost-button").on("click", function boostTurtle(e) {
    // console.log("jQ click on boost button 💥");
    // e.stopPropagation();
    // animalsLeft[0] += 20;
    // // animals[0].style.left = animalsLeft[0] + "px";
    // animalsJQ
    //     .eq(0)
    //     .css({
    //         left: animalsLeft[0] + "px",
    //     })
    //     // .hide(1000)
    //     // .show(1000);
    //     .fadeOut()
    //     .fadeIn();
})(); // eileens iife
