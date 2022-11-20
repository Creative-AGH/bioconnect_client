import { apiSlice } from "./apiSlice";

export const mapApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMarkers: builder.query({
      query: () => "/marker/all",
      providesTags: ["Marker"],
    }),
    getMarker: builder.query({
      query: (id: string) => `/marker/${id}`,
      providesTags: (result, error, id) => [{ type: "Marker", id }],
    }),
  }),
});

export const { useGetAllMarkersQuery, useGetMarkerQuery } = mapApiSlice;
