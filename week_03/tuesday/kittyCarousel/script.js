// console.log("sanitycheck");
(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;

        if (kitties[currentKitty] == kitties[4]) {
            // console.log('currentkitties if statemeent', kitties[currentKitty]);
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");

        setTimeout(moveKitties, 5000);
    }

    setTimeout(moveKitties, 1000);

    document.addEventListener("transitionend", function (event) {
        console.log("event target snap er niks van:", event.target);
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
        // console.log("transition ended", event.target);
    });

    //another if statement where we check if the element has the exit class on it if it does, we want to remove the exit class from the element
})(); //eileens iife
