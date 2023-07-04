import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        mode: 'cors',
        prepareHeaders: (headers,{getState}) => {
            const states = getState();
            console.log('states:', states.reducer.token.token);
            if(states.reducer.token.token !== ''){
                headers.set('Authorization', `Bearer ${states.reducer.token.token}`);
            }
            // If we have a token set in state, let's assume that we should be passing it.
            // headers.set('Authorization', 'Bearer MY_TOKEN');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: builder => ({
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/auth/login',
                method: 'POST',
                // Include the entire post object as the body of the request
                body: initialPost,
            })
        })
    })
})


export const {useAddNewPostMutation,useGetDevices} = apiSlice;