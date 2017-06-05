// grab the things we need
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
let Dishes = mongoose.model('Dish', dishSchema);

// make this available to our Node applications
module.exports = Dishes;