import { baseApi } from "../../baseApi";

export const bookingApi = baseApi.enhanceEndpoints({ addTagTypes: ['Facilities'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => '/bookings',
            providesTags: ['Bookings']
        })
    })
})

export const { useGetAllBookingsQuery } = bookingApi