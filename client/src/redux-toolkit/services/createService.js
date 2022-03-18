import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const categoryService = createApi({
    reducerPath: "category",
    tagTypes: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
        prepareHeaders: (headers, {getState}) => {
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken
            console.log(token);
            if(token){
                headers.set('authorization', token ? `Bearer ${token}` : "")
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (name) => {
                return{
                    url: "create-category",
                    method: "POST",
                    body: name
                }
            },
            invalidatesTags: ['categories']
        }),
        getCategory: builder.query({
            query: (page) => {
                return {
                    url: `categories/${page}`,
                    method: "GET"
                }
            },
            providesTags: ['categories']
        }),
        getParticularCategory: builder.query({
            query: (id) => {
                return {
                    url: `update-category/${id}`,
                    method: "GET"
                }
            }
        })
    })
});

export const {useCreateCategoryMutation, useGetCategoryQuery, useGetParticularCategoryQuery} = categoryService;
export default categoryService;