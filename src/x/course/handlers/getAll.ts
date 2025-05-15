import Elysia from "elysia";
import CourseRepository from "../repositories/index"

export const getAllCourse = new Elysia().get('/courses', async ({ set }) => {
  try {
    const allCourses = await CourseRepository.readAll();
    return { success: true, data: allCourses };
  } catch (error) {
    set.status = 500;
    return { success: false, message: "Failed to fetch courses", error };
  }
});
