(function () {
    var headlinesJQ = $("#headlines");
    var linksJQ = $("a");
    var initialPositionJQ = headlinesJQ.offset().left;
    var requestId;

    headlinesJQ.on("mouseenter", function () {
        cancelAnimationFrame(requestId);
    });

    headlinesJQ.on("mouseleave", function () {
        requestAnimationFrame(moveHeadlines);
    });
    function moveHeadlines() {
        if (initialPositionJQ <= -1 * linksJQ.eq(0).offsetWidth) {
            initialPositionJQ += linksJQ.eq(0).offsetWidth;
            headlinesJQ.append(linksJQ.eq(0));
        }
        initialPositionJQ--;

        headlinesJQ.eq(0).css({ left: initialPositionJQ * "px" });
        linksJQ.eq(0).offsetWidth;
        requestId = requestAnimationFrame(moveHeadlines);
        // console.log(initialPosition);
    }

    moveHeadlines();
})(); // eileens iifi
