const mongoService = require('./mongo-service')

const ObjectId = require('mongodb').ObjectId;

function query() {
  return mongoService.connect()
    .then(db => db.collection('dogs').find({}).toArray())
    .catch(err => console.log('err 40:', err))
}

function getById(dogId) {
  dogId = new ObjectId(dogId)
  return mongoService.connect()
    .then(db => db.collection('dogs').findOne({ _id: dogId }))
    .catch(err => console.log('err 41:', err))
}

function addMsg(dogId, dogMsg) {
  dogId = new ObjectId(dogId)
  return mongoService.connect()
    .then(db => {
      db.collection('dogs').findOneAndUpdate({ _id: dogId }, { $push: { "msgHistory": dogMsg } })
        .then(oneDog => oneDog)
        .catch(err => console.log('err 43:', err))
    })
    .catch(err => console.log('err 44:', err))
}

module.exports = {
  query,
  getById,
  addMsg
}
