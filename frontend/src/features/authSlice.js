import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const authSlice = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        mode: 'cors',
        prepareHeaders: (headers, {getState}) => {
            const states = getState();
            if (states.reducer.token.token) {
                headers.set('Authorization', `Bearer ${states.reducer.token.token}`);
            }
            // If we have a token set in state, let's assume that we should be passing it.
            // headers.set('Authorization', 'Bearer MY_TOKEN');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: builder => ({
        getAuthorization: builder.mutation({
            query: initialPost => ({
                url: '/auth/login',
                method: 'POST',
                // Include the entire post object as the body of the request
                body: initialPost,
            }),
        }),
        getDevices: builder.query({
            query: () => ({
                url: '/devices',
                method: 'GET',
            })
        }),
        getSensors: builder.query({
            query: (id) => ({
                url: `/devices/${id}/sensors`,
                method: 'GET',
            })
        }),
        putDevices: builder.mutation({
            query: ({id, ...patch}) => ({
                url: `/devices/${id}`,
                method: 'PUT',
                body: {...patch.changeDeviesForm},
            }),
        }),
    })
})


export const {
    useGetAuthorizationMutation, useGetDevicesQuery
    , usePutDevicesMutation, useGetSensorsQuery
} = authSlice;