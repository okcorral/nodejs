let MongoClient = require('mongodb').MongoClient
let assert = require('assert');

let url = 'mongodb://gingko:27017/conFusion';
MongoClient.connect(url, function(err, db){
   assert.equal(err, null);
   console.log('Connected successfully to server...');

   let collection = db.collection('dishes');

   collection.insertOne({name:'uthapizza', description: 'test description'},
       function(err, result){
        assert.equal(err, null);
        console.log('After Insert:');
        console.log(result.ops);

        collection.find({}).toArray(function(err, docs){
            assert.equal(err, null);
            console.log('Found:');
            console.log(docs);

            db.dropCollection('dishes', function(err, result){
                assert.equal(err, null);
                db.close();
            });
        });
   });



});

