var dbConn = null;

function connectToMongo() {
  // Reuse existing connection if exist
  if (dbConn) return Promise.resolve(dbConn);
  var MongoClient = require('mongodb').MongoClient;

  // Connection URL
  // const url = (!process.env.PORT) ?
  // 'mongodb://localhost:27017' : 'mongodb+srv://omer:147896325@cluster0-ucenl.mongodb.net/test?retryWrites=true&w=majority'
  const url = 'mongodb+srv://omer:147896325@cluster0-ucenl.mongodb.net/test?retryWrites=true&w=majority';

  const dbName = 'pet_DB';

  const client = new MongoClient(url, { useNewUrlParser: true });

  return client.connect()
    .then(client => {
      console.log('Connected to MongoDB - 123456888888');
      // If we get disconnected (e.g. db is down)
      client.on('close', () => {
        console.log('MongoDB Diconnected!');
        dbConn = null;
      })
      dbConn = client.db(dbName)
      return dbConn;
    })

}

module.exports = {
  connect: connectToMongo
}
