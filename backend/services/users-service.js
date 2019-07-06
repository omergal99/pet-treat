const mongoService = require('./mongo-service')

// const ObjectId = require('mongodb').ObjectId;

function addUser(userNamePass) {
  var user = {
    name: userNamePass.name,
    code: userNamePass.pass,
    isAdmin: false,
    img: '',
    dogId: '',
  }
  return mongoService.connect()
    .then(db => db.collection('users').updateOne(
      { name: userNamePass.name },
      { $set: user },
      { upsert: true }))
    .then(res => {
      user._id = res.upsertedId._id
      return user
    })
}

module.exports = {
  addUser
}
