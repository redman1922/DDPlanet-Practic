import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./features/authSlice.js";

export default configureStore({
    reducer: {
        [authSlice.reducerPath]: authSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authSlice.middleware)
})