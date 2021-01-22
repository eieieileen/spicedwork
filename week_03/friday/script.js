// console.log("sanitycheck", $);

//1.
var currentPlayer = "player1";

//1. make a function to switch players:
function switchPlayer() {
    console.log("switch the player");
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}
// console.log("currentPlayer before call", currentPlayer);
switchPlayer();
// console.log("currentPlayer after call", currentPlayer);

//2. how to see what user clicked on which hole.
$(".column").on("click", function (e) {
    // console.log("ik klik:", e.target); //works amazing
    var col = $(e.currentTarget); // currentTarget = where we listed the event listener to, eventtarget is the actual hole.
    // console.log("col hoop dat dit werkt:", col); works amazing
    var slotsInCol = col.children(); // allows us to search through the children of these elements in the DOM tree and construct a new jQuery object from the matching elements
    // console.log("slotsInCol :", slotsInCol); //coin zou zichtbaar moeten zijn?
    for(var i = slotsInCol.length - 1; i >= 0; i--) {
        // console.log("slotsInCol.eq(i): ", slotsInCol.eq(i));
        if (!slotsInCol.eq(i).hasClass("player1") && !slotsInCol.eq(i).hasClass("player2")) {
            slotsInCol.eq(i).addClass(currentPlayer);
            console.log('currentplayer added to empty slot:', currentPlayer);
            //console.log("slots must be free:")
            break;
        }
    }
    if (i === -1) { // this means column is full so we dont want to do anything
        return;
    }
    var slotsInRow = $(".row" + i);
    // console.log("slotsInRow:", slotsInRow); Hij ziet welke column ik te pakken heb yay
    if (checkForVictory(slotsInCol)) {
        console.log("col victoryyyyyyy!");
    } else if (checkForVictory(slotsInRow)) {
        console.log("row victoryyyyy!!");
    }
    switchPlayer();
});

function checkForVictory(slots) {
    console.log("checking for victory:", slots);
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        console.log("slots.eq(i).hasClass():", slots.eq(i).hasClass(currentPlayer));
        if (slots.eq(i). hasClass(currentPlayer)) {
            count++;
            console.log("counting counting :", count);
            if (count === 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}



//eileens iife for later
// (function () {})();
