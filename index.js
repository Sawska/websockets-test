const http = require("http")
const fs = require("fs")
const url = require("url")
const PORT = 8081;

http.createServer((req,res) => {
    let parsedUrl = url.parse(req.url,true)
    let pathname =parsedUrl.pathname
    if(pathname === "/") pathname = "/index.html"
    else if(pathname == "/index.html" || pathname == "../src/eventsource.js") {
        res.writeHead(200,{
            "Content-Type": pathname === "/index.html" ? "text/html": "text/javascript"
        })
        res.write(fs.readFileSync(__dirname + pathname))
    }
    res.end()
}).listen(PORT)