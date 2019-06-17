import SocketService from '../../services/SocketService';


function sendMsg(txt) {
    SocketService.send(txt);
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


function addMsg(txt, from) {
    return {
        type: 'pushToMsgs',
        payload: { txt, from }
    }
}
function setUserTyping(user) {
    return {
        type: 'changeUserTyping',
        payload: { user }
    }
}

export default {
    sendMsg,
    sendUserTyping,
    addMsg,
    sendUserStop,
    setUserTyping
}