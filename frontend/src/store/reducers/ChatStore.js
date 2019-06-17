const initialState = {
    msgs: [{ txt: 'hello', from: 'Omer' }, { txt: 'hii', from: 'Amit' }],
    userTyping: ''
}

export default (state = initialState, action) => {
    // console.log('reducer: CHAT state: ', state, ", action.type: ", action)
    switch (action.type) {
        case 'pushToMsgs':
            // return { msgs: [...state.msgs, action.payload], userTyping: `${state.userTyping}` };
            return Object.assign(state, { msgs: [...state.msgs, action.payload] });
        case 'changeUserTyping':
            return { msgs: state.msgs, userTyping: action.payload.user };
        default:
            return state;
    }
}