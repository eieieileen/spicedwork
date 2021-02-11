const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./tickerjQuery"));

app.get("/data.json", (req, res) => {
    console.log("request for json has been made");
    //1. get the token to be able to get tweets from the twitter API, when we have the token...
    getToken((err, bearerToken) => {
        console.log("inside the callback of getToken in index.js");
        if (err) {
            console.log("ooooohh no, something went wrong in getToken", err);
            res.sendStatus(500);
        } else {
            console.log("We have the TOKEN YAY ME", bearerToken);
            //2. make a request for tweets using the token.
            getTweets(bearerToken, (err, tweets) => {
                console.log(tweets);
                //3. filter the tweets we got in step 2.
                const filteredTweets = filterTweets(tweets);
            
                //4. send back those filtered tweets as json to the client side.
                res.json(filterTweets);
            });
        }
    });
});

app.listen(8080, () => console.log("🌻 You look fabulous my queen ✨"));
