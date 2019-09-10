const initialState = {
  msgs: [],
  userTyping: ''
}

export default (state = initialState, action) => {
  var copy;
  // console.log('reducer: CHAT state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'pushToMsgs':
      // return { msgs: [...state.msgs, action.payload], userTyping: `${state.userTyping}` };
      copy = JSON.parse(JSON.stringify(state));
      return Object.assign(copy, { msgs: [...copy.msgs, action.payload] });
    case 'replaceMsgs':
      copy = JSON.parse(JSON.stringify(state));
      return Object.assign(copy, { msgs: action.payload });
    case 'changeUserTyping':
      return { msgs: state.msgs, userTyping: action.payload.user };
    default:
      return state;
  }
}