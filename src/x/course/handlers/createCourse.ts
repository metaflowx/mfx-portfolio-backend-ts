import Elysia from "elysia";
import { courseModelType } from "../types/createCourse";
import { createCourseService } from "../services/createCourse";

export const createCourse = new Elysia()
  .use(courseModelType)
  .post('/createCourse', async ({ set, body }) => {
    
    try {
      const created = await createCourseService(body);
      set.status = 200;
      return {
        success: true,
        message: "Course Created Successfully",
        data: created
      };
    } catch (error) {
      set.status = 400;
      return {
        success: false,
        message: "Course Creation Failed",
        error
      };
    }
  }, {
   
  });
