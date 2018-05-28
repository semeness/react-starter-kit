const userListConst = {
  dataLoaded: 'User Data Loaded',
  dataFailed: 'User Data Failed To Load',
  dataInProcess: 'User Data Loading',
};

function exampleActionSimple() {
  return {type: exampleConst.simple};
}

function getUserList () {
  return function (dispatch, getState, {api}) {
    dispatch({type:userListConst.dataInProcess});

    return api.UserList.getList()
      .then ((response) => {
        console.log(response);
        if (response.errors.length) {
          return dispatch({
              type:userListConst.dataFailed,
              payload: {
                errors: response.errors,
              },
            });
        }

        return dispatch ({
            type:userListConst.dataLoaded,
            payload: {
              data: response.data,
            },
          });
      })

  }
}

function exampleActionListGet() {
  return function(dispatch, getState, {api}) {
    dispatch({type: exampleConst.getListStart});

    return api.Example.listGet()
      .then((response) => {
        if (response.errors.length) {
          return dispatch({
            type: exampleConst.getListError,
            payload: {
              errors: response.errors,
            },
          });
        }

        return dispatch({
          type: exampleConst.getListSuccess,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({type: exampleConst.getListFail});
        throw(error);
      });
  };
}

export {
  userListConst,
  getUserList,
  exampleActionSimple,
  exampleActionListGet,
};
