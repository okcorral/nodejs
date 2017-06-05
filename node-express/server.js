let express = require('express');
let morgan = require('morgan');
let dishRouter = require('./dishRouter');
let promoRouter = require('./promoRouter');
let leaderRouter = require('./leaderRouter');

let hostname = 'localhost';
let port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});