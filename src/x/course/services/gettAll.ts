import CourseRepository from "../repositories/index"

export const getAllCourseService = async () => {
  return await CourseRepository.readAll();
};
