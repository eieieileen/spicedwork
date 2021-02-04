const http = require("http");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log(err));
    response.on("error", (err) => console.log(err));

    //method will be a normal http method. url = everything after and including the third forward slaash.
    const { method, url } = request;
    const { headers } = request;
    const userAgent = headers["user-agent"]; //importent that headers are represented in lower-case only.

    console.log(request.headers, request.method, request.url); // for each request log the method, url, and request headers to the console

    if (request.method == "GET" || request.method == "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
    }
    if (request.method == "HEAD") {
        response.end();
    }
    if (request.method == "GET") {
        response.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
    }
    if (request.method == "POST") {
        let body = "";

        request
            .on("data", (chunk) => {
                body += chunk;
            })
            .on("end", () => {
                console.log(body);
            });
        response.setHeader("Location", "/");
        response.statusCode = 302;
        response.end();
    } 
    if (request.method != "GET" && "HEAD" && "POST") {
        response.statusCode = 405;
        response.end();
    }

    // response.setHeader("content-type", "text/html");
    // response.write(body);
    // response.end();
});

server.listen(8080, () => console.log(`Whaddup Ei im listening`));
