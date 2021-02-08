const http = require("http");
const fs = require("fs");
const path = require("path");
const anotherModule = require("./anotherModule");
const cluster = require("cluster");


console.log("anotherModule", anotherModule.projectOverviewList());
const contentType = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

if (Math.random() > 5) {
    throw new Error ("Oh noooo, server crashed!!!");
}


http.createServer((req, res) => {
    //first step is to handle with errors
    req.on("error", (err) => console.log("err in req:", err));
    res.on("error", (err) => console.log("err in res:", err));

    console.log("request method", req.method);

    if (req.method != "GET") {
        console.log("not a GET request, NOT OKAAAAYYY 🙅‍♀️");
        res.statusCode = 405; // 405 means not allowed.
        return res.end();
    }

    if (req.url == "/") {
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${anotherModule.projectOverviewList()}
</body>
</html>`);
        return res.end();
    }

    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);
    if (!requestedFilePath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        return res.end();
    }

    console.log("requested file path:", requestedFilePath);

    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            console.log(
                "user requested sth that we dont have in our project directory"
            );
            res.statusCode = 404;
            return res.end();
        }
        console.log("user requested sth that does not exist :D");
        if (stats.isDirectory()) {
            console.log("user requested a directory");
            console.log("filepath to project directory", requestedFilePath);

            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml :((((", err);
                    res.statusCode = 500; // means internal error
                    return res.end();
                });
            } else {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                return res.end();
                // we simply want to redirect the user to the req.url, but add a slash to it
                // you did this business of redirecting yesterday with http-request-listners
                // remember to set your headers, send your status code and end your response
            }
        } else {
            console.log("user requested a file", requestedFilePath);
            //this means we want to stream and pipe the requested file to figure out the correct headers to set
            console.log(
                "file ext of requested file is:",
                path.extname(requestedFilePath)
            );
            res.setHeader(
                "Content-Type",
                contentType[path.extname(requestedFilePath)]
            ); //we want to make this dynamic with either a function or const.css
            const readStreamFile = fs.createReadStream(requestedFilePath);

            readStreamFile.pipe(res);
            readStreamFile.on("error", (err) => {
                console.log("err in readStreamHtml :((((", err);
                res.statusCode = 500; // means internal error
                return res.end();
            });
        }
    });
}).listen(8080, () =>
    console.log("🍑Eileens portfolio is listenings to her boss 😎")
);
