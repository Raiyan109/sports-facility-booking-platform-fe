import { baseApi } from "../../baseApi";

export const facilityApi = baseApi.enhanceEndpoints({ addTagTypes: ['Facilities'] }).injectEndpoints({
    endpoints: (builder) => ({
        getFacilities: builder.query({
            query: () => '/facility',
            providesTags: ['Facilities']
        }),
        getSingleFacility: builder.query({
            query: (facilityId) => ({
                url: `/facility/${facilityId}`,
                method: 'GET',
            }),
            providesTags: ['Facilities']
        }),
        getPopularFacilities: builder.query({
            query: () => '/facility/popular-facilities',
            providesTags: ['Facilities']
        }),
        createFacility: builder.mutation({
            query: (facility) => ({
                url: '/facility',
                method: 'POST',
                body: facility,
            }),
            invalidatesTags: ['Facilities']
        }),
        deleteFacility: builder.mutation({
            query: (facilityId) => ({
                url: `/facility/${facilityId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Facilities']
        }),
        updateFacility: builder.mutation({
            query: ({ facilityId, ...facility }) => ({
                url: `/facility/${facilityId}`,
                method: 'PUT',
                body: facility
            }),
            invalidatesTags: ['Facilities']
        }),
        getAverageRatings: builder.query({
            query: () => '/facility/averageRatings',
            providesTags: ['Facilities']
        }),
    })
})

export const { useGetFacilitiesQuery, useCreateFacilityMutation, useDeleteFacilityMutation, useGetSingleFacilityQuery, useUpdateFacilityMutation, useGetAverageRatingsQuery, useGetPopularFacilitiesQuery } = facilityApi