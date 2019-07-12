const initialState = {
  dog: null
}

export default (state = initialState, action) => {
  // var copy;
  // console.log('reducer: DOG state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'updateDog':
      return action.payload;  
    default:
      return state;
  }
}