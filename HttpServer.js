const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => { 
    
    // serve HTML
    if (req.url === "/html") {
        const html = fs.readFileSync("index.html");
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    } 
    
    // serve CSS
    else if (req.url === "/style.css") {
        const css = fs.readFileSync("style.css");
        res.setHeader("Content-Type", "text/css");
        res.end(css);
    }

    // default response
    else {
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("server running on http://localhost:3000");
});



console.log(process.env.PORT);
console.log(process.env.NAME);

// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.write("Hello from node server!");
//     res.end();
// });
// ---------------------------------------------------------
// const server = http.createServer((req,res) =>{
//     if(req.url ==="/") {
//         res.end("Home Page");
//     }
//     else if(req.url ==="/about"){
//         res.end("home page not found");
//     }
//      else {
//         res.end("404 not found");
//     }
// });
// ----------------------------------------------------------------
// const server = http.createServer((req,res) =>{ 
// if(req.url==="/api/user"){
//     res.setHeader("Content-Type","application/json");
//     res.end(JSON.stringify({name:"monisha",role:"trainer"}));
// }
// });

// -----------------------------------------------------------------------







   
