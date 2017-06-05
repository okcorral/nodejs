let mongoose = require('mongoose'),
    assert = require('assert');

let Dishes = require('./models/dishes-1');

// Connection URL
let url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    let newDish = Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    // save the user
    newDish.save(function (err) {
        if (err) throw err;
        console.log('Dish created!');

        // get all the users
        Dishes.find({}, function (err, dishes) {
            if (err) throw err;

            // object of all the users
            console.log(dishes);
            db.collection('dishes').drop(function () {
                db.close();
            });
        });
    });
});
