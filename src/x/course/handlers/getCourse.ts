import Elysia from "elysia";
import CourseRepository from "../repositories/index"

export const getCourse = new Elysia().get('/course/:id', async ({ params, set }) => {
  try {
    const course = await CourseRepository.readOne(params.id);
    if (!course) {
      set.status = 404;
      return { success: false, message: "Course not found" };
    }

    return { success: true, data: course };
  } catch (error) {
    set.status = 500;
    return { success: false, message: "Failed to fetch course", error };
  }
});
