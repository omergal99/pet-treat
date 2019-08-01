import UserService from '../../services/UserService';

// function loadUser() {
//   return (dispatch) => {
//     UserService.getUser()
//       .then((user) => dispatch({ type: 'setUser', payload: { user } }))
//   }
// }

function loadUser() {
  return async (dispatch) => {
    const user = await UserService.getUser();
    dispatch({ type: 'setUser', payload: { user } });
  }
}

function newUserEnter(newUser) {
  return async (dispatch) => {
    const user = await UserService.signup(newUser);
    dispatch({ type: 'setUser', payload: { user } });
  }
}

function logout() {
  return async (dispatch) => {
    await UserService.logout();
    dispatch({ type: 'nullify', payload: ''  });
  }
}

export default {
  loadUser,
  newUserEnter,
  logout
}