import {createSelector} from 'reselect';

function getUserSelector(state) {
    return state.userList;
}

function getUserDataSelector(state) {
    return getUserSelector(state).data;
}

const getUserDataListSelector = createSelector([getUserSelector], (userList) => userList.list.map((id) => userList.data[id]));

export {
    getUserSelector,
    getUserDataSelector,
    getUserDataListSelector,
};
