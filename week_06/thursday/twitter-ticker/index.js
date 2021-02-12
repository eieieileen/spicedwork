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
            return Promise.all([
                getTweetsPromisify(bearerToken, "nytimes"),
                getTweetsPromisify(bearerToken, "bbcworld"),
                getTweetsPromisify(bearerToken, "theonion"),
            ]).then((tweets) => {
                const nyTweets = tweets[0];
                const bbcTweets = tweets[1];
                const onionTweets = tweets[2];

                const mergedTweets = [
                    ...nyTweets,
                    ...bbcTweets,
                    ...onionTweets,
                ];
                const sortedTweets = mergedTweets.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                const filteredTweets = filterTweets(sortedTweets);
                res.json(filteredTweets);
            });
        })
        .catch((err) => {
            console.log("err in Promise.all :(", err);
            res.sendStatus(500);
        })
        .catch((err) => {
            console.log("error in getToken, my Queen", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("🌻 You look fabulous my queen ✨"));
