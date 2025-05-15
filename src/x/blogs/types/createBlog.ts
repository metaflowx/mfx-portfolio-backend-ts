import { t, Elysia } from "elysia";

export const createBlogSchemaRequest = t.Object({
  image: t.String(),
  heading: t.String(),
  author: t.String(),
  published: t.String(),
  category: t.String(),
  paragraph: t.String(),
  images: t.String(),
  headings: t.String(),
  paragraphs: t.String(),
  tags: t.String(),
  role: t.Optional(t.String())
});

export const createBlogSchemaResponse = t.Object({
  id: t.Number(),
  image: t.String(),
  heading: t.String(),
  author: t.String(),
  published: t.String(),
  category: t.String(),
  paragraph: t.String(),
  images: t.String(),
  headings: t.String(),
  paragraphs: t.String(),
  tags: t.String(),
  role: t.String()
});

export const blogModelType = new Elysia().model({
  "createBlog.body": createBlogSchemaRequest,
  "createBlog.response": createBlogSchemaResponse,
});

export type blogRequest = typeof createBlogSchemaRequest.static;
export type blogResponse = typeof createBlogSchemaResponse.static;