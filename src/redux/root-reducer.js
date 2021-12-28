import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer //Each key equates to an individual slice of state
});