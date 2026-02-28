import { baseApi } from "../baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register',
                method: 'POST',
                body: userInfo // Note: RTK Query usually uses 'body' instead of 'data'
            }),
            invalidatesTags: ['AUTH']
        }),
        // Add the Login Mutation here
        userLogin: builder.mutation({
            query: (credentials) => ({
                url: '/api/login',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['AUTH']
        }),
    }),
});

export const { useUserSignUpMutation, useUserLoginMutation } = authApi;