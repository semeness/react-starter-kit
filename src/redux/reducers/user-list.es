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
            console.log(state.data);
            return {...state,
                data: this.data.filter((item)=>item.id!=payload.id),
            };

        default:
            return state;
    }
};
