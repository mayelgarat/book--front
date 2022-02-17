import { userService } from "../services/userService.js";
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


export function loadUsers() {
  return async dispatch => {
      try {
          dispatch({ type: 'LOADING_START' })
          const users = await userService.getUsers()
          dispatch({ type: 'SET_USERS', users })
      } catch (err) {
          console.log('UserActions: err in loadUsers', err)
      } finally {
          dispatch({ type: 'LOADING_DONE' })
      }
  }
}


export function log(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials);

      const action = { type: "SET_USER", user };
      dispatch(action);
    } catch (err) {
      console.log("err login", err);
    }
  };
}
export function signup(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(credentials);
      console.log('user', user);
      const action = { type: "SET_USER", user };
      dispatch(action);
    } catch (err) {
      console.log("err signup", err);
    }
  };
}

export function logout() {
  console.log('logout action');
  return async (dispatch) => {
    try {
      await userService.logout();
      const action = { type: "SET_USER", user: null };
      dispatch(action);
    } catch (err) {
        console.log("err logout", err);
    }
  };
}
