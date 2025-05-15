import { t, Elysia } from "elysia";

export const getCourseParams = t.Object({
  id: t.String()
});

export const courseModelTypeGet = new Elysia().model({
  "getCourse.params": getCourseParams,
});

export type courseParams = typeof getCourseParams.static;
