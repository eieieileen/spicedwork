const { twitterKey, twitterSecret } = require("./secrets");
const https = require("https");

module.exports.getToken = function getToken(callbackToken) {
    console.log("running getToken");

    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function reqCallback(response) {
        if (response.statusCode != 200) {
            callbackToken(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("bodybodybody:", body);
            let parsedBody = JSON.parse(body);
            console.log("parsedBodybodybody", parsedBody.access_token);
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, callbackTweets) {
    //console.log("running getToken inside th callback of getToken in index.js");
    //this function will get tweets from the twitter api
    //this is also for me to complete
    const getTweetsOpt = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };

    function reqTweetsCallback(response) {
        if (response.statusCode != 200) {
            callbackTweets(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("bodybodybody:", body);
            let parsedTweet = JSON.parse(body);
            callbackTweets(null, parsedTweet);
        });
    }

    const req = https.request(getTweetsOpt, reqTweetsCallback);
    //console.log("rekkie: ", req);
    req.end("grant_type=client_credentials");
};

module.exports.filterTweets = function filterTweets(tweets) {
    let arr = [];
    for (var i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls[0] && !tweets[i].entities.urls[1] && !tweets[i].entities.media) {
            console.log("Dit zijn alleen de tekst tweets: ", tweets[i].full_text);
            arr.push({
                link: tweets[i].entities.urls[0].url,
                alt: tweets[i].full_text
            });    
        }
    }  return arr;
    //this function will clean up (filter) our tweet response from the twiiter api
    //this is also for me to complete.
};
