// import StorageService from './StorageService';

// const USER_KEY = 'user-pet-treat';
var user = _randomName();

function getUser() {
    // var currUser = StorageService.load(USER_KEY);
    // return Promise.resolve(currUser);
    return Promise.resolve(user);
}

function signup(name) {
    // var currUser = StorageService.load(USER_KEY);
    // return Promise.resolve(currUser);
    return Promise.resolve(name);
}

export default {
    getUser,
    signup
}

function _randomName(size = 4) {
    var text = "";
    var possibleUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text += possibleUp.charAt(Math.floor(Math.random() * possibleUp.length));

    var possible = "aaabcdeeeefghiiiijklmnoooopqrstuuuuvwxyz";
    for (var i = 0; i < size - 1; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}