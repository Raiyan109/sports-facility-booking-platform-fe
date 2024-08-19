import { baseApi } from "../baseApi";

export const facilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFacilities: builder.query({
            query: () => '/facility'
        })
    })
})

export const { useGetFacilitiesQuery } = facilityApi