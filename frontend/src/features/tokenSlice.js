import {createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'token',
    initialState:{
        token: ''
    },
    reducers:{
        newToken(state,action){
            state.token = action.payload
        }
    }
})

export default tokenSlice.reducer;
export const {newToken} = tokenSlice.actions;