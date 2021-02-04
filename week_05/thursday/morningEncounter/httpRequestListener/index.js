const http = require("http");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log(err));
    response.on("error", (err) => console.log(err));

    //method will be a normal http method. url = everything after and including the third forward slaash.
    const { method, url } = request;
    const { headers } = request;
    const userAgent = headers["user-agent"]; //importent that headers are represented in lower-case only.
    console.log(request.headers, request.method, request.url);

    

});

server.listen(8080, () => console.log(`Whaddup Ei im listening`));
