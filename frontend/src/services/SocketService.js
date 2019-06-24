import io from 'socket.io-client'
import ChatActions from '../store/actions/ChatActions';

import store from '../store/AppStore.js'

const serverUrl = process.env.NODE_ENV !== 'development' ?
  '' : '//localhost:9090';

var socket = io(serverUrl);

connectSocket();
function connectSocket() {
  socket.on('chat new msg', (txt, date, from) => {
    console.log(`'${from}' send massage: ${txt} at ${date}`)
    // actions.addMsg(txt, from)
    store.dispatch(ChatActions.addMsg(txt, date, from))
  });

  socket.on('other user type', (user) => {
    if (user) {
      store.dispatch(ChatActions.setUserTyping(user))
    } else {
      store.dispatch(ChatActions.setUserTyping(''))
    }
  });
}

const send = (txt, date) => {
  var currUser = store.getState().userStore.currUser;
  socket.emit('msg sent', txt, date, currUser);
}
const typing = () => {
  socket.emit('user type', store.getState().userStore.currUser);
}
const stopTyping = () => {
  socket.emit('user type', '');
}

export default {
  send,
  typing,
  stopTyping
}
