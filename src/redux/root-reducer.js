import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "../pages/directory/directory.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer, //Each key equates to an individual slice of state
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);

