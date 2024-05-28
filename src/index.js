const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    
    let path = "./src/views/";
    switch(req.url) {
        case "/":
            res.statusCode = 200;
            path += "index.html"
            break;
        case "/about":
            res.statusCode = 200;
            path += "about.html"
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        case "/contact-me":
            res.statusCode = 200;
            path += "/contact-me.html";
            break;
        default:
            res.statusCode = 404;
            path += "404.html"
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }   
    })
})

server.listen(8080, "localhost", () => {
    console.log("Server listening for requests");
})