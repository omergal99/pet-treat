const initialState = {
    currUser: 'user2'
}

export default (state = initialState, action) => {
    // console.log('reducer: USER state: ', state, ", action.type: ", action)

    switch (action.type) {
        case 'setUser':
            return { currUser: action.payload.user };
        default:
            return state;
    }
}

