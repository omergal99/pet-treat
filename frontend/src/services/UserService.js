import StorageService from './StorageService';
import HttpService from './HttpService';

const USER_URL = HttpService.getUrl('users');
const USER_STORAGE = 'curr user';

// var user = _randomName();

function getUser() {
  var currUser = StorageService.load(USER_STORAGE);
  return Promise.resolve(currUser);
  // return Promise.resolve(user);
}

// function signup(name) {
  // var currUser = StorageService.load(USER_STORAGE);
  // return Promise.resolve(currUser);
  // return Promise.resolve(name);
// }

function signup(newUser) {
  return HttpService.post(`${USER_URL}/signup`, newUser)
    .then(res => {
      StorageService.store(USER_STORAGE, res.data);
      console.log(res.data)
      return res.data;
    })
}

export default {
  getUser,
  signup
}

// function _randomName(size = 4) {
//   var text = "";
//   var possibleUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   text += possibleUp.charAt(Math.floor(Math.random() * possibleUp.length));

//   var possible = "aaabcdeeeefghiiiijklmnoooopqrstuuuuvwxyz";
//   for (var i = 0; i < size - 1; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   return text;
// }