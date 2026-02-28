import { baseApi } from "../baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register',
                method: 'POST',
                body: userInfo 
            }),
            invalidatesTags: ['AUTH']
        }),
        
        userLogin: builder.mutation({
            query: (credentials) => ({
                url: '/api/login',
                method: 'POST',
                data: credentials
            }),
            invalidatesTags: ['AUTH']
        }),
    }),
});

export const { useUserSignUpMutation, useUserLoginMutation } = authApi;