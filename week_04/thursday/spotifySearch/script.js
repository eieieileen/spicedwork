(function () {
    $(".submit-button").on("click", function () {
        console.log("button was clicked!!!!!!!!!");
        var userInput = $("input").val(); // returns value from inputfield
        var artistOrAlbum = $("select").val();
        console.log("userdata: ", userInput, "-", artistOrAlbum);

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                // console.log("response", response);
                response = response.artist || response.albums;
                // console.log("response:", response);

                var resultsHtml = "";
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://www.google.de/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-europe-50247789&psig=AOvVaw3Lx9gqLeEWfg_0KfpKHzc6&ust=1611933895582000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjIq_f3vu4CFQAAAAAdAAAAABAD";
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }
                    resultsHtml +=
                        "<div>" +
                        response.items[i].name +
                        "</div" +
                        "<img src='" +
                        defaultImage +
                        "'/>";
                }
                console.log("results.html:", resultsHtml);
                $(".results-container").html(resultsHtml);
                console.log("response.next", response.next);
                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                console.log("nexturl", nextUrl);
            },
        });
    });
})(); //eileens iife
