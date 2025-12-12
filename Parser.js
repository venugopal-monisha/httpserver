const url = require("url");
const http = require("http");
const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    console.log(parsed.query);

    res.end("Query Received");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

//?name=Monisha&age=25 pass this in url will avi