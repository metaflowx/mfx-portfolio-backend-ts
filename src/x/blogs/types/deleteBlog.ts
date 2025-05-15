import { t, Elysia } from "elysia";

export const deleteBlogParams = t.Object({
  id: t.Numeric()
});

export const blogModelTypeDelete = new Elysia().model({
  "deleteBlog.params": deleteBlogParams,
});

export type deleteBlogParamsType = typeof deleteBlogParams.static;
