const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/*
const logger = function(req, res, next){
	console.log('Logging...');
	next();
};

app.use(logger);
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
app.use(express.static(path.join(__dirname, 'public')));

/*
const people = [
	{
		name:'Jeff',
		age: 30
	},
	{
		name:'Tom',
		age: 51
	},
	{
		name:'Sara',
		age: 45
	}
]
*/
app.get('/', (req, res) => {
	res.send('Hello World');
	//res.json(people);
});

app.listen(3000, () => {
	console.log('Server started on port 3000...');
});