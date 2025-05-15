import { t, Elysia } from "elysia";

export const getBlogParams = t.Object({
  id: t.Numeric()
});

export const blogModelTypeGet = new Elysia().model({
  "getBlog.params": getBlogParams,
});

export type blogParams = typeof getBlogParams.static;