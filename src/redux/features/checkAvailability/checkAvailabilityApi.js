import { baseApi } from "../../baseApi";

export const checkAvailabilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        checkAvailability: builder.query({
            query: (availabilityQuery) => ({
                url: `/check-availability?date=${availabilityQuery.date}&facility=${availabilityQuery.facility}`,
                method: 'GET',
            }),
            // providesTags: ['Bookings']
        }),
    })
})

export const { useCheckAvailabilityQuery, useLazyCheckAvailabilityQuery } = checkAvailabilityApi