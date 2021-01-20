// console.log("sanitycheck");
(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;
    var dots = document.getElementsByClassName("dot");
    var timer;
    var transitionInProgress;

    document.addEventListener("transitionend", function (event) {
        console.log("event target:", event.target);
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
        transitionInProgress = false;
        // console.log("transition ended", event.target);
    });

    for (var i = 0; i < dots.length; i++) {
        (function (i) {
            dots[i].addEventListener("click", function (event) {
                if (event.target.classList.contains("onscreen")) {
                    console.log("image is already on screen");
                    return;
                }
                if (transitionInProgress) {
                    console.log("transition in progress");
                    return;
                }
                console.log("movekitties i:", i);
                clearTimeout(timer);
                moveKitties(i);
            });
        })(i);
    }

    function moveKitties(nextKitty) {
        dots[currentKitty].classList.remove("on");
        // dots[currentKitty].classList.add("on");
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        transitionInProgress = true;

        if (typeof nextKitty == "undefined") {
            currentKitty++;
            if (kitties[currentKitty] == kitties[4]) {
                currentKitty = 0;
            }
        } else {
            currentKitty = nextKitty;
        }

        kitties[currentKitty].classList.add("onscreen");
        dots[currentKitty].classList.add("on");
        timer = setTimeout(moveKitties, 5000);
    }

    dots[currentKitty].classList.add("on");
    setTimeout(moveKitties, 1000);
})(); //eileens iife
