const initialState = {
  msgs: [{ text: 'hello', dateCreated: 1559329928517, fromUserName: 'Omer' },
  { text: 'hii', dateCreated: 1560329960117, fromUserName: 'Amit' }],
  userTyping: ''
}

export default (state = initialState, action) => {
  var copy;
  // console.log('reducer: CHAT state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'pushToMsgs':
      // return { msgs: [...state.msgs, action.payload], userTyping: `${state.userTyping}` };
      return Object.assign(state, { msgs: [...state.msgs, action.payload] });
    case 'replaceMsgs':
      // console.log('WE IN CHAT STORE REPLACE-MSGS')
      copy = JSON.parse(JSON.stringify(state));
      return Object.assign(copy, { msgs: action.payload });
    case 'changeUserTyping':
      return { msgs: state.msgs, userTyping: action.payload.user };
    default:
      return state;
  }
}