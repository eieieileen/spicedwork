const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
const util = require("util");

const getTokenPromisify = util.promisify(getToken);
const getTweetsPromisify = util.promisify(getTweets);

app.use(express.static("./tickerjQuery"));

app.get("/data.json", (req, res) => {
    //1. get the token to be able to get tweets from the twitter API, when we have the token...
    getTokenPromisify((err, bearerToken) => {
        if (err) {
            console.log("ooooohh no, something went wrong in getToken", err);
            res.sendStatus(500);
        } else {
            console.log("We have the TOKEN YAY ME", bearerToken);
            //2. make a request for tweets using the token.
            getTweetsPromisify(bearerToken, (err, tweets) => {
                // console.log(tweets);
                //3. filter the tweets we got in step 2.
                const filteredTweets = filterTweets(tweets);

                //4. send back those filtered tweets as json to the client side.
                res.json(filteredTweets);
            });
        }
    });
});

app.listen(8080, () => console.log("🌻 You look fabulous my queen ✨"));
