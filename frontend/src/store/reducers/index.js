import ChatStore from './ChatStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    chatStore: ChatStore,
    userStore: UserStore
});

export default rootReducer;