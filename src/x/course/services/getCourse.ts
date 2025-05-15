import CourseRepository from "../repositories/index"

export const getCourseService = async (id: string) => {
  const course = await CourseRepository.readOne(id);
  if (!course) throw new Error("Course not found");
  return course;
};
