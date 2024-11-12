import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:5000/api',
    baseUrl: 'https://sports-facility-booking-platform-be.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        console.log(token, 'token from baseapi');

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    }

})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['Facilities', 'Bookings'],
    endpoints: () => ({})
})