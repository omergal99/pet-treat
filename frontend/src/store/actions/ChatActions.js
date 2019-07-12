import SocketService from '../../services/SocketService';


function sendMsg(msg) {
  SocketService.send(msg);
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

function addMsg(msg) {
  return { type: 'pushToMsgs', payload: msg }
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