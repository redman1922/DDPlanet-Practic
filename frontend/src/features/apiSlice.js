import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
        reducerPath: 'api/products',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
        endpoints: (builder) => ({
            getProducts: builder.query({
            query: (limit = 5) => `products?limit=${limit}`}),
    }),
    })
export const { useGetProductsQuery } = productApi