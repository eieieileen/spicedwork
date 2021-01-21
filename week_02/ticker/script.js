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
            requestId = requestAnimationFrame(moveHeadlines);

        });
    }
    function moveHeadlines() {
        initialPosition--;

        if (initialPosition <= -1 * links[0].offsetWidth)  {
            //when (initialPosition <= -links[0].offsetWidth) its not stopping but just getting slower and after holding it for a while going super fast.
            initialPosition += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }

        headlines.style.left = initialPosition + "px";

    
        requestId = requestAnimationFrame(moveHeadlines);
        // console.log(initialPosition);
    }
    moveHeadlines();
})(); // eileens iifi
