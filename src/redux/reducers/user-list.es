import {userListConst} from 'redux/actions/user-list';

const initialState = {
    data: null,
    errors: [],
    isLoading: false,
    list: [],
    simple: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case userListConst.dataInProcess:
            return {
                ...state,
                isLoading: true,
            };


      case userListConst.dataLoaded:
          return {
                ...state,
                data: payload.data.list.reduce((prev, item) => ({
                    ...prev,
                    [item.id]: item,
                }), {}),
                isLoading: false,
                list: payload.data.list.map((item) => item.id),
            };

        case userListConst.dataFailed:
            return {
                ...state,
                isLoading: false,
            };

        case userListConst.deletingUser:
            const newUserData = {...state.data};
            delete newUserData[payload.id];
            return {
                ...state,
                data: {...newUserData},
                list: state.list.filter((item)=>item !== payload.id),
            };

        case userListConst.editingUser:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.id]: {
                        ...state.data[payload.id],
                        name: payload.newName,
                        surname: payload.newSurname,
                        age: payload.age,
                        gender: payload.gender,
                        isActive: payload.activity,
                        education: payload.education,
                    },
                },
            };

        default:
            return state;
    }
};
