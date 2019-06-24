import SocketService from '../../services/SocketService';


function sendMsg(txt, date) {
  SocketService.send(txt, date);
  // return { type: '', payload: { } };
}
function sendUserTyping() {
  SocketService.typing();
  // return { type: '', payload: { } };
}
function sendUserStop() {
  SocketService.stopTyping();
  // return { type: '', payload: { } };
}


function addMsg(text, dateCreated, fromUserName) {
  return { type: 'pushToMsgs', payload: { text, dateCreated, fromUserName } }
}
function setUserTyping(user) {
  return { type: 'changeUserTyping', payload: { user } }
}

export default {
  sendMsg,
  sendUserTyping,
  addMsg,
  sendUserStop,
  setUserTyping
}