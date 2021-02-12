(function () {
    var headlinesJQ = $("#headlines");
    var linksJQ = $("a");
    var initialPositionJQ = headlinesJQ.offset().left;
    var requestId;

    // Create a json file containing the text and
    // hrefs of the links in your ticker project and
    // remove the links from your html file. XXXX!
    // When the page loads!!!!!!!!!!!!!!
    // make an ajax request
    // to fetch the text and hrefs and, once you have them, XXXX
    // insert the links into the page.
    // Once the links are in the page,
    // start the animation.
    // To test this you should use http-server.

    // Window.on("load", function (){
    //     console.log("load links on: ");
    // });
    
    $(document).ready(function () {
        console.log("documentready");
        var links = {
            url: "/data.json",
            method: "GET",
            success: function (getLinks) {
                // console.log("get the links:" , getLinks);
                var myLinks = "";
                // console.log("Hi");
                for (var i = 0; i < getLinks.length; i++) {
                    // console.log("getLinks:", getLinks[i]);
                    // var url = getLinks[i].link;
                    // // console.log("getLInks[i]", url);
                    // var alt = getLinks[i].alt;
                    // console.log("getAlt:", txt);
                    var ticker = $("#headlines");
                    myLinks +=
                        "<a href=" +
                        getLinks[i].link +
                        ">" +
                        "" +
                        getLinks[i].alt + " Source: " + getLinks[i].source +
                        "</a>";
                    ticker.html(myLinks);
                }
                console.log(myLinks);
                initialPositionJQ--;
            },

            error: function (err) {
                console.log("error in ajax: ", err);
            },
        };

        $.ajax(links);
    });

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

        headlinesJQ.eq(0).css({ left: initialPositionJQ + "px" });
        linksJQ.eq(0).offsetWidth;
        requestId = requestAnimationFrame(moveHeadlines);
        // console.log(initialPosition);
    }

    moveHeadlines();
})(); // eileens iifi
