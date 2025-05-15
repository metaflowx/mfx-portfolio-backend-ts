// Optional pagination or no types needed unless query parameters involved
import { t, Elysia } from "elysia";

export const getAllCoursesQuery = t.Optional(
  t.Object({
    limit: t.Optional(t.Numeric()),
    offset: t.Optional(t.Numeric()),
  })
);

export const courseModelTypeGetAll = new Elysia().model({
  "getAllCourses.query": getAllCoursesQuery,
});
