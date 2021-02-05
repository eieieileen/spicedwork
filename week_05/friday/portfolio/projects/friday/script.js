//1.
var currentPlayer = "player1";
var popUp = $(".popUp");
var overlay = $(".overlay");
var x = $("#x");
var reset = $("button");
var flying = $("#flyingG");
var standing = $("#standing");
var wheelie = $("#wheelie");
var plant1 = $("#plant1");
var skateboard = $("#skateboard");
var plant2 = $("#plant2");
var plant3 = $("#plant3");
var plant4 = $("#plant4");
var body = $("body");
console.log("skate g: ", skateboard);

//1. make a function to switch players:
function switchPlayer() {
    // console.log("switch the player");
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
        body.eq(0).css({
            "background-color": "#ffc779",
            transition: "1s ease-in-out",
        });

        //color pink
    } else {
        currentPlayer = "player1";
        // color yellow
        body.eq(0).css({
            "background-color": "#ffe0e9",
            transition: "1s ease-in-out",
        });
    }
}
// console.log("currentPlayer before call", currentPlayer);
// switchPlayer();
// console.log("currentPlayer after call", currentPlayer);

//2. how to see what user clicked on which hole.
$(".column").on("click", function (e) {
    // console.log("ik klik:", e.target); //works amazing
    var col = $(e.currentTarget); // currentTarget = where we listed the event listener to, eventtarget is the actual hole.
    // console.log("col hoop dat dit werkt:", col); works amazing
    var slotsInCol = col.children(); // allows us to search through the children of these elements in the DOM tree and construct a new jQuery object from the matching elements
    // console.log("slotsInCol :", slotsInCol); //coin zou zichtbaar moeten zijn?
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        // console.log("slotsInCol.eq(i): ", slotsInCol.eq(i));
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            slotsInCol.eq(i).addClass(currentPlayer);
            // console.log('currentplayer added to empty slot:', currentPlayer);
            //console.log("slots must be free:")
            break;
        }
    }
    if (i === -1) {
        // this means column is full so we dont want to do anything
        return;
    }
    var slotsInRow = $(".row" + i);
    // console.log("slotsInRow:", slotsInRow); Hij ziet welke column ik te pakken heb yay
    var slotsD = $(".slot");
    // console.log(slotsD);
    checkForVictory(slotsInCol);
    checkForVictory(slotsInRow);
    checkForDiags(slotsD);

    switchPlayer();
});

function checkForVictory(slots) {
    // console.log("checking for victory:", slots);
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        // console.log("slots.eq(i).hasClass():", slots.eq(i).hasClass(currentPlayer));
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            // console.log("counting counting :", count);
            if (count === 4) {
                console.log("wins", slots);
                overlay.eq(0).css({ visibility: "visible" });
                flying.eq(0).css({
                    transform: "translateX(-25%)",
                    visibility: "visible",
                });
                standing.eq(0).css({
                    transform: "translateX(-150%)",
                    visibility: "visible",
                });
                wheelie.eq(0).css({
                    transform: "translateX(150%)",
                    visibility: "visible",
                });
                plant1.eq(0).css({
                    transform: "translateX(-100%)",
                    visibility: "visible",
                });
                skateboard.eq(0).css({
                    transform: "rotate(0deg)",
                    visibility: "visible",
                });
                plant2.eq(0).css({
                    transform: "rotate(0deg)",
                    visibility: "visible",
                });
                plant3.eq(0).css({
                    transform: "translateX(30%)",
                    visibility: "visible",
                });
                plant4.eq(0).css({
                    transform: "translateY(10%)",
                    visibility: "visible",
                });
                //wins, visibility modal on visible
                return true;
            }
        } else {
            count = 0;
        }
    }
}

// var slotsD = $(".slot");
// console.log("slotten:", slotsD);
function checkForDiags(slots) {
    var diags = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38],
    ];

    for (var j = 0; j < diags.length; j++) {
        // console.log("diags jk", diags[j);
        if (
            slots.eq(diags[j][0]).hasClass(currentPlayer) &&
            slots.eq(diags[j][1]).hasClass(currentPlayer) &&
            slots.eq(diags[j][2]).hasClass(currentPlayer) &&
            slots.eq(diags[j][3]).hasClass(currentPlayer)
        ) {
            // looping through array and checks of de balletjes de zelfde waarden hebben als die in de array.
            console.log(currentPlayer + "won");
            overlay.eq(0).css({ visibility: "visible" });
            flying.eq(0).css({
                transform: "translateX(-25%)",
                visibility: "visible",
            });
            standing
                .eq(0)
                .css({ transform: "translateX(-150%)", visibility: "visible" });
            wheelie.eq(0).css({
                transform: "translateX(150%)",
                visibility: "visible",
            });
            plant1.eq(0).css({
                transform: "translateX(-100%)",
                visibility: "visible",
            });
            plant2.eq(0).css({
                transform: "rotate(0deg)",
                visibility: "visible",
            });
            skateboard.eq(0).css({
                transform: "rotate(0deg)",
                visibility: "visible",
            });
            plant3.eq(0).css({
                transform: "translateX(30%)",
                visibility: "visible",
            });
            plant4.eq(0).css({
                transform: "translateY(10%)",
                visibility: "visible",
            });
            //visibility modal visible

            // console.log("k", diags[j][k]);
        }
        // console.log("arraycheck", diags[j]);
        // if(slotsD.eq(j).hasClass(currentPlayer)) {
        //     console.log("currentPlayer: ", slotsD.eq(j).hasClass(currentPlayer));
        // }
    }
}

//victory and reset

x.on("click", function () {
    // console.log("lekka klikke", x); works
    // popUp.eq(0).css({ visibility: "hidden" });
    overlay.eq(0).css({ visibility: "hidden" });
});

reset.on("click", function () {
    // overlay.eq(0).css({ visibility: "hidden" });
    location.reload();
});

//animation
