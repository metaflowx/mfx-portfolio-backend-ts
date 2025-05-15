// import Elysia from "elysia";
// import CourseRepository from "../repositories/index"

// export const updateCourse = new Elysia().put('/course/:id', async ({ params, body, set }) => {
//   try {
//     const updated = await CourseRepository.update(params.id, body);
//     if (!updated) {
//       set.status = 404;
//       return { success: false, message: "Course not found or update failed" };
//     }

//     return { success: true, message: "Course updated", data: updated };
//   } catch (error) {
//     set.status = 500;
//     return { success: false, message: "Failed to update course", error };
//   }
// });

import Elysia from "elysia";
import CourseRepository from "../repositories";

// Define types if not already defined elsewhere
interface Params {
  id: string;
}

interface CourseUpdateBody {
  title?: string;
  description?: string;
  // Add any other fields your course can be updated with
}

export const updateCourse = new Elysia().put('/course/:id', async ({ params, body, set }) => {
  try {
    const updated = await CourseRepository.update((params as Params).id, body as CourseUpdateBody);

    if (!updated) {
      set.status = 404;
      return { success: false, message: "Course not found or update failed" };
    }

    return { success: true, message: "Course updated", data: updated };
  } catch (error) {
    set.status = 500;
    return { success: false, message: "Failed to update course" };
  }
});
