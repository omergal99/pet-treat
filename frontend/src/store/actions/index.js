import ChatActions from './ChatActions';
import UserActions from './UserActions';
import DogsActions from './DogsActions';

export default {
    ...ChatActions,
    ...UserActions,
    ...DogsActions
};