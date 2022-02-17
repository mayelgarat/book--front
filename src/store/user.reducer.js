
import {userService} from '../services/userService'
const initialState = {
   
    user: userService.getLoggedinUser() || null,
    users: null,
 
};
export function userReducer(state = initialState, action) {

    let newState = state;
    switch (action.type) {
   
        case 'SET_USERS':
            newState = { ...state, users: action.users }
            break;
        case "SET_USER":
            newState = {
                ...state,
                user: action.user,
            };
            break;
        default:
    }
    return newState;
}