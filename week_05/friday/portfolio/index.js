const http = require("http");
const fs = require("fs");
const path = require("path");

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

    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);
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
                    requestedFilePath + "/index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml :((((", err);
                    res.statusCode = 500; // means internal error
                    return res.end();
                });
            } else {
                // we simply want to redirect the user to the req.url, but add a slash to it
                // you did this business of redirecting yesterday with http-request-listners
                // remember to set your headers, send your status code and end your response
            }
        } else {
            console.log("user requested a file", requestedFilePath);
            //this means we want to stream and pipe the requested file to figure out the correct headers to set
            console.log("file ext of requested file is:", path.extname(requestedFilePath));
            res.setHeader("Content-Type", "text/css"); //we want to make this dynamic with either a function or const.css 
        }
    });
}).listen(8080, () =>
    console.log("🍑Eileens portfolio is listenings to her boss 😎")
);
