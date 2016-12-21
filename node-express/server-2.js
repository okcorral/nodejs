let express = require('express');
let morgan = require('morgan');

let hostname = 'localhost';
let port = 3000;

let app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function (){
    console.log(`Server running at http://${hostname}:${port}/`)
});