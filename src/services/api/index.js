import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { url } from "../../config.js";

export const restBaseQuery = fetchBaseQuery({
  baseUrl: url,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: restBaseQuery,
  endpoints: () => ({}),
});
