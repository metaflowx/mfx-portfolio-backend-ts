import { t, Elysia } from "elysia";

export const getAllBlogsQuery = t.Optional(
  t.Object({
    limit: t.Optional(t.Numeric()),
    offset: t.Optional(t.Numeric()),
  })
);

export const blogModelTypeGetAll = new Elysia().model({
  "getAllBlogs.query": getAllBlogsQuery,
});