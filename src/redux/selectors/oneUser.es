import {createSelector} from 'reselect';

function getUserSelector(state) {
    return state.userList;
}

function getOneUserSelector(state, id) {
    return getUserSelector(state).data[id];
}

export {
    getUserSelector,
    getOneUserSelector,
};
