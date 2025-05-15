import { t, Elysia } from "elysia";

export const updateCourseParams = t.Object({
  id: t.String()
});

export const updateCourseBody = t.Object({
  coverPhoto: t.Optional(t.String()),
  title: t.Optional(t.String()),
  description: t.Optional(t.String()),
  newPrice: t.Optional(t.String()),
  oldPrice: t.Optional(t.String()),
  rating: t.Optional(t.String()),
  review: t.Optional(t.String()),
  semester: t.Optional(t.String()),
  year: t.Optional(t.String()),
  seller: t.Optional(t.String()),
  statusApproval: t.Optional(t.String())
});

export const courseModelTypeUpdate = new Elysia().model({
  "updateCourse.params": updateCourseParams,
  "updateCourse.body": updateCourseBody,
});

export type updateCourseRequest = typeof updateCourseBody.static;
export type updateCourseParamsType = typeof updateCourseParams.static;
