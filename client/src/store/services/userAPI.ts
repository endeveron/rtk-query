
// a product API service

// need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../../types/User'

// define a service using a base URL and expected endpoints
export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_LOCAL_DB_URL }),
  endpoints: builder => ({
    getUsers: builder.query<User[], string>({
      query: () => `users`,
    }),
    getUserById: builder.query<User, string>({
      query: (id = '') => `users/${id}`,
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      })
    })
  })
})

// export hooks
export const { 
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
} = userAPI
