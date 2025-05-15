import Elysia from "elysia";
import CourseRepository from "../repositories/index"


export const deleteCourse = new Elysia().delete('/course/:id', async ({ params, set }) => {
  try {
    const deleted = await CourseRepository.delete(params.id);
    if (!deleted) {
      set.status = 404;
      return { success: false, message: "Course not found or deletion failed" };
    }

    return { success: true, message: "Course deleted", data: deleted };
  } catch (error) {
    set.status = 500;
    return { success: false, message: "Failed to delete course", error };
  }
});
