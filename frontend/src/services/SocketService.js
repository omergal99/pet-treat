import io from 'socket.io-client'
import ChatActions from '../store/actions/ChatActions';

import store from '../store/AppStore'

const serverUrl = process.env.NODE_ENV !== 'development' ?
  '' : '//localhost:9090';

var socket = io(serverUrl);

connectSocket();
function connectSocket() {
  socket.on('chat new msg', msg => {
    console.log(`'${msg.fromUserName}' send massage: ${msg.text} at ${msg.dateCreated}`)
    // actions.addMsg(txt, from)
    store.dispatch(ChatActions.addMsg(msg))
    console.log(msg);

    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(registration => {
        const header = `${msg.fromUserName} send new message`;
        const dogOptionsText = msg.dogOptions.reduce((acc, item) => {
          return item ? acc ? acc + ', ' + item.text : item.text : acc;
        }, '');
        const options = {
          body: dogOptionsText
        };
        console.log(header, options);
        registration.showNotification(header, options);
      });
    }

  });

  socket.on('other user type', (user) => {
    if (user) {
      store.dispatch(ChatActions.setUserTyping(user))
    } else {
      store.dispatch(ChatActions.setUserTyping(''))
    }
  });
}

const send = msg => {
  // var currUser = store.getState().userStore.currUser;
  socket.emit('msg sent', msg);
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
