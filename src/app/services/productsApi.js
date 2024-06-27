import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        //Get All Products
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllProductsQuery,useGetProductByIdQuery} = productsApi;