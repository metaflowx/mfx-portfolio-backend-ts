import { t, Elysia } from "elysia";

export const deleteCourseParams = t.Object({
  id: t.String()
});

export const courseModelTypeDelete = new Elysia().model({
  "deleteCourse.params": deleteCourseParams,
});

export type deleteCourseParamsType = typeof deleteCourseParams.static;
