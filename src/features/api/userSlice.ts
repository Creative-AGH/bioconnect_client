import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    createUser: builder.mutation<any, any>({
      query: (state: any) => ({
        url: "/all/register",
        method: "POST",
        body: state,
        providesTags: ["User"],
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateUserMutation } = userApiSlice;
