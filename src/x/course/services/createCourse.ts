import CourseRepository from "../repositories/index"

export const createCourseService = async (courseData: any) => {
  const requiredFields = [
    "coverPhoto", "title", "description", "newPrice", "oldPrice",
    "rating", "review", "semester", "year", "seller"
  ];

  for (const field of requiredFields) {
    if (!courseData[field]) {
      throw new Error(`${field} is required.`);
    }
  }

  const newCourse = await CourseRepository.create(courseData);
  if (!newCourse) throw new Error("Course creation failed.");

  return newCourse;
};
