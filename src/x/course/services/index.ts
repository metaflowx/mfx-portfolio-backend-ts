import * as courseRepo from "../repositories/index";

export const createCourseService = async (data: any) => {
  // optional: validate data here
  return await courseRepo.createCourse(data);
};

export const getCoursesService = async () => {
  return await courseRepo.getCourses();
};

export const getCourseByIdService = async (id: string) => {
  return await courseRepo.getCourseById(id);
};

export const updateCourseService = async (id: string, data: any) => {
  return await courseRepo.updateCourse(id, data);
};

export const deleteCourseService = async (id: string) => {
  return await courseRepo.deleteCourse(id);
};
