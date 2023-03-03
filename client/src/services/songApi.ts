import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Song"],
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: (page = 1, limit = 10) => `/songs/?page=${page}&limit=${limit}`,
      providesTags: ["Song"],
    }),
    getSongStatics: builder.query({
      query: () => `/songs/statics`,
      providesTags: ["Song"],
    }),
    createSong: builder.mutation({
      query: ({ title, artist, album, genre }) => ({
        url: `songs`,
        method: "POST",
        body: { title, artist, album, genre },
      }),
      invalidatesTags: ["Song"],
    }),
    updateSong: builder.mutation({
      query: ({ id, title, artist, album, genre }) => ({
        url: `songs/${id}`,
        method: "PUT",
        body: { title, artist, album, genre },
      }),
      invalidatesTags: ["Song"],
    }),
    deleteSong: builder.mutation({
      query: (id) => ({
        url: `songs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Song"],
    }),
  }),
});
export const {
  useGetSongsQuery,
  useGetSongStaticsQuery,
  useCreateSongMutation,
  useUpdateSongMutation,
  useDeleteSongMutation,
} = songApi;
