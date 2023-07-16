import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        mode: 'cors',
        prepareHeaders: (headers) => {
            if (localStorage.getItem('rtkToken')) {
                headers.set('Authorization', `Bearer ${localStorage.getItem('rtkToken')}`);
            }
            // If we have a token set in state, let's assume that we should be passing it.
            // headers.set('Authorization', 'Bearer MY_TOKEN');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes:['Devices','Sensors'],
    endpoints: builder => ({
        getAuthorization: builder.mutation({
            query: (initialPost) => ({
                url: '/auth/login',
                method: 'POST',
                // Include the entire post object as the body of the request
                body: initialPost,
            }),
            invalidatesTags:['Devices','Sensors']
        }),
        getDevices: builder.query({
            query: () => ({
                url: '/devices',
                method: 'GET',
            }),
            providesTags:['Devices']
        }),
        getSensors: builder.query({
            query: (id) => ({
                url: `/devices/${id}/sensors`,
                method: 'GET',
            }),
            providesTags:['Devices','Sensors']
        }),
        getSensorsItem: builder.query({
            query: ({devicesId, id}) => ({
                url: `/devices/${devicesId}/sensors/${id}`,
                method: 'GET',
            }),
            providesTags:['Sensors']
        }),
        changeDevices: builder.mutation({
            query: ({id, ...body}) => ({
                url: `/devices/${id}`,
                method: 'PUT',
                body: {...body.changeDeviesForm},
            }),
            invalidatesTags:['Devices']
        }),
        changeSensors: builder.mutation({
            query: ({id,...body}) => ({
                url: `/sensors/${id}`,
                method: 'PATCH',
                body:{...body.valueForm}
            }),
            invalidatesTags: ['Sensors']
        }),
    })
})

export const {
    useGetAuthorizationMutation, useGetDevicesQuery
    , useChangeDevicesMutation, useGetSensorsQuery,
    useGetSensorsItemQuery, useChangeSensorsMutation
} = authSlice;