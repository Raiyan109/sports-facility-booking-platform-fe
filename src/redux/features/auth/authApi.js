import { baseApi } from "../../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userInfo,
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            })
        }),
        getUser: builder.query({
            query: () => '/auth/user',
            // providesTags: ['User']
        }),
    })
})

export const { useSignupMutation, useLoginMutation, useGetUserQuery } = authApi