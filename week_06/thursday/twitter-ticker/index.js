const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
const util = require("util");

const getTokenPromisify = util.promisify(getToken);
const getTweetsPromisify = util.promisify(getTweets);

app.use(express.static("./tickerjQuery"));

app.get("/data.json", (req, res) => {
    getTokenPromisify()
        .then((bearerToken) => {
            getTweetsPromisify(bearerToken)
                .then((tweets) => {
                    const filteredTweets = filterTweets(tweets);

                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("Now an error in getTweets my Love", err);
                });
        })
        .catch((err) => {
            console.log("error in getToken, my Queen", err);
            res.sendStatus(500);
        });

   
});

app.listen(8080, () => console.log("🌻 You look fabulous my queen ✨"));
