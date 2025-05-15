import { t, Elysia } from "elysia";

export const createCourseSchemaRequest = t.Object({
  coverPhoto: t.String(),
  title: t.String(),
  description: t.String(),
  newPrice: t.String(),
  oldPrice: t.String(),
  rating: t.String(),
  review: t.String(),
  semester: t.String(),
  year: t.String(),
  seller: t.String(),
  statusApproval: t.Optional(t.String())
});

export const createCourseSchemaResponse = t.Object({
  id: t.String(),
  coverPhoto: t.String(),
  title: t.String(),
  description: t.String(),
  newPrice: t.String(),
  oldPrice: t.String(),
  rating: t.String(),
  review: t.String(),
  semester: t.String(),
  year: t.String(),
  seller: t.String(),
  statusApproval: t.String()
});

export const courseModelType = new Elysia().model({
  "createCourse.body": createCourseSchemaRequest,
  "createCourse.response": createCourseSchemaResponse,
});

export type courseRequest = typeof createCourseSchemaRequest.static;
export type courseResponse = typeof createCourseSchemaResponse.static;
