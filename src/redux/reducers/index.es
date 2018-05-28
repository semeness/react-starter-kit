import {combineReducers} from 'redux';

import example from './example';
import userList from './user-list';

export default combineReducers({
    example,
    userList,
});
