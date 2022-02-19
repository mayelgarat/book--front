
import Axios from "axios";
import { httpService } from "./http.service";

var axios = Axios.create({
  withCredentials: true,
});
const STORAGE_KEY_LOGGEDIN = "loggedinUser";

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
};

window.us = userService;
async function login(credentials) {
  try {
    const user = await httpService.post("auth/login", credentials);
    if (user) _setLoggedinUser(user);
    return user;
  } catch (err) {
    console.log("err login", err);
  }
}
async function signup(user) {
  try {
    const userSignup = await httpService.post("auth/signup", user);
    _setLoggedinUser(userSignup);
    return userSignup;
  } catch (err) {
    console.log("err signup", err);
  }
}
async function logout() {
  try {
    await httpService.post("auth/logout");
  } catch (err) {
    console.log(err, "err");
    throw new Error(err);
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function _setLoggedinUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}
