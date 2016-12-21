let express = require('express'),
    http = require('http');

let hostname = 'localhost';
let port = 3000;

var app = express();

app.use(function(req, res, next){
   console.log(req.headers);

   res.writeHead(200, {'Content-type':'text/html'});
   res.end('<html><body><h1>Hello World</h1></body></html>');
});

let server = http.createServer(app);

server.listen(port, hostname, function(){
   console.log(`Server running at http://${hostname}:${port}/`)
});
