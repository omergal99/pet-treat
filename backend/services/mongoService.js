var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
const url = (!process.env.PORT) ?
    'mongodb://localhost:27017' : 'mongodb+srv://omer:147896325@cluster0-ucenl.mongodb.net/test?retryWrites=true&w=majority'

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});