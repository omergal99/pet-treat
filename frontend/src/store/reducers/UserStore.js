const initialState = {
    currUser: ''
}

export default (state = initialState, action) => {
    // console.log('reducer: USER state: ', state, ", action.type: ", action)

    switch (action.type) {
        case 'setUser':
            console.log(action.payload.user)
            return { currUser: action.payload.user };
        default:
            return state;
    }
}

