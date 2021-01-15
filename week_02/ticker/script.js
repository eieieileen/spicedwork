(function () {
    var headlines = document.getElementById("headlines");
    var links = document.getElementsByTagName("a");
    var initialPosition = headlines.offsetLeft; //1189
    var requestId;

    console.log("links:", links);

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            console.log("event.target:", event.target);
            cancelAnimationFrame(requestId);
        });

        links[i].addEventListener("mouseleave", function (event) {
            console.log("event.target mouse leave:", event.target);
            requestAnimationFrame(moveHeadlines);
        });
    }
    function moveHeadlines() {
        initialPosition--;

        if (initialPosition <= -links[0].offsetWidth) {
            initialPosition += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }

        headlines.style.left = initialPosition + "px";
        links[0].offsetWidth;
        requestId = requestAnimationFrame(moveHeadlines);
        // console.log(initialPosition);
    }
    moveHeadlines();
})(); // eileens iifi
