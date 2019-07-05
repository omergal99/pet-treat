import SocketService from '../../services/SocketService';


function sendMsg(user, txt, date) {
  SocketService.send(user, txt, date);
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


function addMsg(fromUserName, text, dateCreated) {
  return { type: 'pushToMsgs', payload: { fromUserName, text, dateCreated } }
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