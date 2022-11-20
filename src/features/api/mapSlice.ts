import { apiSlice } from "./apiSlice";

export const mapApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMap: builder.query({
      query: () => "/addresses",
      providesTags: ["Map"],
    }),
    getAllMarkers: builder.query({
      query: () => "/addresses",

      providesTags: ["Marker"],
    }),
    getMarker: builder.query({
      query: (id: string) => `/markers/${id}`,
      providesTags: (result, error, id) => [{ type: "Marker", id }],
    }),
  }),
});

export const { useGetAllMarkersQuery, useGetMapQuery } = mapApiSlice;
