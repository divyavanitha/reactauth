import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import userReducer from "./user_reducer";
// import errorReducer from "./error_reducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer
    // errors: errorReducer
})