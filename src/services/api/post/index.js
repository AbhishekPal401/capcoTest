import { restApi } from "../../../services/api/index.js";

export const postsApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      keepUnusedDataFor: 5,
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery } = postsApi;
