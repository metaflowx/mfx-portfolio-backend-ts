import { t, Elysia } from "elysia";

export const updateBlogParams = t.Object({
  id: t.Numeric()
});

export const updateBlogBody = t.Object({
  image: t.Optional(t.String()),
  heading: t.Optional(t.String()),
  author: t.Optional(t.String()),
  published: t.Optional(t.String()),
  category: t.Optional(t.String()),
  paragraph: t.Optional(t.String()),
  images: t.Optional(t.String()),
  headings: t.Optional(t.String()),
  paragraphs: t.Optional(t.String()),
  tags: t.Optional(t.String()),
});

export const blogModelTypeUpdate = new Elysia().model({
  "updateBlog.params": updateBlogParams,
  "updateBlog.body": updateBlogBody,
});

export type updateBlogRequest = typeof updateBlogBody.static;
export type updateBlogParamsType = typeof updateBlogParams.static;