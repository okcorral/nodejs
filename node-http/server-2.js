let http = require('http');
let fs = require('fs');
let path = require('path');

let hostname = 'localhost';
let port = 3000;

let server = http.createServer(function(req, res){

    console.log('Request fot ' + req.url + ' by method ' + req.method);

    if (req.method=='GET'){

        let fileUrl = '';

        if (req.url=='/') {
            fileUrl = '/index.html';
        } else {
            fileUrl= req.url;
        }

        let filePath = path.resolve('./public' + fileUrl);

        let fileExt = path.extname(filePath);

        if (fileExt=='.html'){
            fs.exists(filePath, function (exists) {
                if (!exists){
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end('<h1>Error 404: ' + fileUrl + ' not found</h1>');
                    return;
                } else {
                    res.writeHead(200,  {'Content-Type': 'text/html'});
                    fs.createReadStream(filePath).pipe(res);
                }

            });
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>Error 404: ' + fileUrl + ' not an HTML file</h1>');
        }

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Error 404: ' + req.method + ' not supported</h1>');
    }

});

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
