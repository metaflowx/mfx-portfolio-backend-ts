import { Elysia } from "elysia";


// Import all handlers
import { createCourse } from "./createCourse"
import { getCourse } from "./getCourse";
import { getAll } from "./getAll";
import { updateCourse } from "./updateCourse";
import { deleteCourse } from "./deleteCourse";

// Compose all handlers into one router
export const courseRoutes = new Elysia()
  .use(createCourse)
  .use(getCourse)
  .use(getAll)
  .use(updateCourse)
  .use(deleteCourse);
