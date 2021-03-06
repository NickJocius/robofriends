import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const robotApi = createApi({
    reducerPath: 'robotApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAllRobots: builder.query({
            query: (users) => `${users}?format=json`,
        }),
        getRobotById: builder.query({
            query: (id) => `users/${id}`,
        }),
        getPostsById: builder.query({
            query: (id) => `users/${id}/posts`
        })
    }),
})

export const { useGetAllRobotsQuery, useGetRobotById, useGetPostsById } = robotApi;