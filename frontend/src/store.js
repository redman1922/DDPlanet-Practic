import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./features/tokenSlice";
import {authSlice} from "./features/authSlice";

const rootReducer = combineReducers({
    token: tokenSlice
})

export default configureStore({
    reducer: {
        [authSlice.reducerPath]: authSlice.reducer,
        reducer:rootReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authSlice.middleware)
})