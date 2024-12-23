import { baseApi } from "../../baseApi";

export const bookingApi = baseApi.enhanceEndpoints({ addTagTypes: ['Bookings'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => '/bookings',
            providesTags: ['Bookings']
        }),
        getBookingTrends: builder.query({
            query: () => '/bookings/bookingTrends',
            // providesTags: ['User']
        }),
        getSingleBooking: builder.query({
            query: (bookingId) => ({
                url: `/bookings/${bookingId}`,
                method: 'GET',
            }),
            providesTags: ['Bookings']
        }),
        getUserBookings: builder.query({
            query: () => '/bookings/user',
            providesTags: ['Bookings']
        }),
        createBooking: builder.mutation({
            query: (booking) => ({
                url: '/bookings',
                method: 'POST',
                body: booking,
            }),
            invalidatesTags: ['Bookings']
        }),
        cancelBooking: builder.mutation({
            query: (bookingId) => ({
                url: `/bookings/${bookingId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Bookings']
        }),
    })
})

export const { useGetAllBookingsQuery, useGetUserBookingsQuery, useCreateBookingMutation, useCancelBookingMutation, useGetSingleBookingQuery, useGetBookingTrendsQuery } = bookingApi