const mongoService = require('./mongo-service')

// const ObjectId = require('mongodb').ObjectId;

function addUser(userNamePass) {
  var user = {
    name: userNamePass.name,
    code: userNamePass.code,
    isAdmin: false,
    img: '',
    dogId: '',
  }
  var copyUser = JSON.parse(JSON.stringify(user))
  // return mongoService.connect()
  //   .then(db => db.collection('users').updateOne(
  //     { name: userNamePass.name },
  //     { $set: user },
  //     { upsert: true }))
  //   .then(res => {
  //     user._id = res.upsertedId._id
  //     return user
  //   })
  delete copyUser.code;
  delete copyUser.isAdmin;
  return Promise.resolve(copyUser);
}

module.exports = {
  addUser
}
