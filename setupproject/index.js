import http from 'http';

const port = 7000;

const server = http.createServer((req, res) => {

    if(req.url === "/users") {
        res.writeHead(200, {
            "context-Type": "application/json"
        });
        res.end(JSON.stringify({
            name : "sanjay"
        }));
    }
    console.log(req.method);
    res.writeHead(200, {
        "context-Type" : "text/plain"
    });
    res.end("this is plain text from backend")
})

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})