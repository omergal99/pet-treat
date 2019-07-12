import ChatStore from './ChatStore'
import DogsStore from './DogsStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    chatStore: ChatStore,
    dogsStore: DogsStore,
    userStore: UserStore
});

export default rootReducer;