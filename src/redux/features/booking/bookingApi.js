import { baseApi } from "../../baseApi";

export const bookingApi = baseApi.enhanceEndpoints({ addTagTypes: ['Facilities'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => '/bookings',
            providesTags: ['Bookings']
        }),
        getUserBookings: builder.query({
            query: () => '/bookings/user',
            providesTags: ['Bookings']
        }),
    })
})

export const { useGetAllBookingsQuery, useGetUserBookingsQuery } = bookingApi