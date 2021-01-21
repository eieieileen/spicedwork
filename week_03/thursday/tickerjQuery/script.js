(function () {
    var headlinesJQ = $("#headlines");
    var linksJQ = $("a");
    var initialPositionJQ = headlinesJQ.offset().left;

    var requestId;

    for (var i = 0; i < linksJQ.length; i++) {
        linksJQ.on("mouseenter", function (event) {
            console.log("event.target:", event.target);
            cancelAnimationFrame(requestId);
        });

        linksJQ.on("mouseenter", function (event) {
            console.log("event.target mouse leave:", event.target);
            requestId = requestAnimationFrame(moveHeadlines);
        });
    }

    function moveHeadlines() {
        if (initialPositionJQ <= -1 * linksJQ.eq(0).offsetWidth) {
            initialPositionJQ += linksJQ.eq(0).offsetWidth;
            headlinesJQ.appendChild(linksJQ.eq(0));
        }
        initialPositionJQ--;

        headlinesJQ.eq().css({ left: initialPositionJQ * "px" });
        // headlinesJQ.style.left = initialPositionJQ + "px";

        requestId = requestAnimationFrame(moveHeadlines);
        // console.log(initialPosition);
    }
    moveHeadlines();
})(); // eileens iifi
