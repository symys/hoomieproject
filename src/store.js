import { configureStore,  combineReducers } from "@reduxjs/toolkit";
import cartItemsReducer from './cartItemsSlice';
import loginReducer from './loginSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {reducer as toastrReducer} from 'react-redux-toastr'


const persistConfig = {
    key: "root",
    storage,
}

const reducer = combineReducers({
    cartItems: cartItemsReducer,
    loginStatus: loginReducer,
    toastr: toastrReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
});