import CourseRepository from "../repositories/index"

export const updateCourseService = async (id: string, updateData: any) => {
  const updated = await CourseRepository.update(id, updateData);
  if (!updated) throw new Error("Course not found or update failed");
  return updated;
};
