const userListConst = {
    dataLoaded: 'User Data Loaded',
    dataFailed: 'User Data Failed To Load',
    dataInProcess: 'User Data Loading',
    deletingUser: 'Deleting Exicting User',
    editingUser: 'Editing Exicting User',

};

function exampleActionSimple() {
  return {type: exampleConst.simple};
}

function getUserList () {
  return function (dispatch, getState, {api}) {
    dispatch({type:userListConst.dataInProcess});

    return api.UserList.getList()
      .then ((response) => {
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

function deleteUser (id) {
    return {
        payload: {
            id,
        },
        type: userListConst.deletingUser,
    };
}

function editUser (id, newName, newSurname, age) {
    return {
        payload: {
            id: id,
            newName: newName,
            newSurname: newSurname,
            age: age,
        },
        type: userListConst.editingUser,
    };
}



export {
  userListConst,
  getUserList,
    editUser,
  deleteUser,
  exampleActionSimple,
};
