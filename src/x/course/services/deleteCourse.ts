import CourseRepository from "../repositories/index"

export const deleteCourseService = async (id: string) => {
  const deleted = await CourseRepository.delete(id);
  if (!deleted) throw new Error("Course not found or deletion failed");
  return deleted;
};
