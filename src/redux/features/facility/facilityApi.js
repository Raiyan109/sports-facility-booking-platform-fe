import { baseApi } from "../../baseApi";

export const facilityApi = baseApi.enhanceEndpoints({ addTagTypes: ['Facilities'] }).injectEndpoints({
    endpoints: (builder) => ({
        getFacilities: builder.query({
            query: () => '/facility',
            providesTags: ['Facilities']
        }),
        createFacility: builder.mutation({
            query: (facility) => ({
                url: '/facility',
                method: 'POST',
                body: facility,
            }),
            invalidatesTags: ['Facilities']
        })
    })
})

export const { useGetFacilitiesQuery, useCreateFacilityMutation } = facilityApi