import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./features/apiSlice";
import tokenSlice from "./features/tokenSlice";

const rootReducer = combineReducers({
    token: tokenSlice
})

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        reducer:rootReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})