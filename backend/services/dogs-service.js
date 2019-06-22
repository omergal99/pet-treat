const mongoService = require('./mongo-service')

function query() {
  return mongoService.connect()
    .then(async db => {
      const collection = await db.collection('dogs').find({}).toArray();
      console.log('**************************',collection)
      return collection;
    })
    .catch(err => console.log('err4', err))
}

module.exports = {
  query,
}
