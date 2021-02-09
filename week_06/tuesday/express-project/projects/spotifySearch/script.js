(function () {
    var nextUrl;
    var resultsHtml;
    var result;

    $(".submit-button").on("click", function () {
        resultsHtml = "";
        // console.log("button was clicked!!!!!!!!!");
        var userInput = $("input").val(); // returns value from inputfield
        var artistOrAlbum = $("select").val();

        // console.log("userdata: ", userInput, "-", artistOrAlbum);
        // console.log(artistOrAlbum);
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: (result = function (response) {
                response = response.artists || response.albums;
                // console.log("response", response.albums.items);
                // console.log("response:", response);

                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://i.pinimg.com/originals/f1/96/e4/f196e47332e4156926d74f33ad9ff1f3.jpg";
                    if (response.items[i].images.length > 0) {
                        // console.log(response.items[i].images[0].url);
                        defaultImage = response.items[i].images[0].url;
                    }
                    var link = response.items[i].external_urls.spotify;

                    resultsHtml +=
                        "<div>" +
                        "<a href=" +
                        link +
                        ">" +
                        response.items[i].name +
                        "</a>" +
                        "<a href=" +
                        link +
                        ">" +
                        "<img src='" +
                        defaultImage +
                        "'/>" +
                        "</a>" +
                        "</div>";
                }
                // console.log("results.html:", resultsHtml);
                $(".results-container").html(resultsHtml);
                // console.log("response.next", response.next);
                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                // console.log("nexturl", nextUrl);
                if (response.next) {
                    if (location.search.indexOf("?scroll=infinite") > -1) {
                        infiniteCheck();
                        //console.log("we want to do infinite scoll now");

                        //First number we need how far we scrolled
                        console.log(
                            "how far have we scrolled",
                            $(window).scrollTop()
                        );

                        //Second number is the height of the browser
                        console.log("height of screen", $(window).height());

                        //third number is how high the entire page is
                        console.log("height of page", $(document).height());
                    } else {
                        $(".moreButton").css({ visibility: "visible" });
                        console.log("more button visible");
                    }
                } else {
                    $(".moreButton").css({ visibility: "hidden" });
                    console.log("more button visible");
                }
            }),
        });
    });

    function infiniteCheck() {
        //console.log("checking infinite");
        var reachedBottom =
            $(window).scrollTop() + $(window).height() >=
            $(document).height() - 500;
        console.log("reachedBottom: ", reachedBottom);
        if (reachedBottom) {
            $.ajax({
                method: "GET",
                url: nextUrl,
                success: result,
            });
        } else {
            setTimeout(infiniteCheck, 500);
        }
    }

    //more button:
    $(".moreButton").on("click", function () {
        // console.log("click button", $("button"));
        $.ajax({
            url: nextUrl,
            success: function (response) {
                response = response.artists || response.albums;
                //console.log("response", response.albums.items);
                //console.log("response:", response);
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://www.google.de/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-europe-50247789&psig=AOvVaw3Lx9gqLeEWfg_0KfpKHzc6&ust=1611933895582000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjIq_f3vu4CFQAAAAAdAAAAABAD";
                    if (response.items[i].images.length > 0) {
                        // console.log(response.items[i].images[0].url);
                        defaultImage = response.items[i].images[0].url;
                    }
                    var link = response.items[i].external_urls.spotify;

                    resultsHtml =
                        "<div>" +
                        "<a href=" +
                        link +
                        ">" +
                        response.items[i].name +
                        "</a>" +
                        "</div>" +
                        "<a href=" +
                        link +
                        ">" +
                        "<img src='" +
                        defaultImage +
                        "'/>" +
                        "</a>";
                    $(".results-container").append(resultsHtml);

                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "spicedify.herokuapp.com/spotify"
                        );
                }
            },
        });
    });
})(); //eileens iife
