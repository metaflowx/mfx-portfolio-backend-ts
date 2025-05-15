import { createCourse } from "./createCourse"
import { getCourse } from "./getCourse"
import { getAllCourse } from "./getAll"
import { updateCourse } from "./updateCourse"
import { deleteCourse } from "./deleteCourse"

export const courseHandlers = [
  createCourse,
  getCourse,
  getAllCourse,
  updateCourse,
  deleteCourse
];
