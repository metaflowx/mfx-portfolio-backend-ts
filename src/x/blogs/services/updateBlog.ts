import BlogRepository from "../repositories";

export const updateBlogService = async (id: string, updateData: any) => {
  console.log("1", updateData);

  const updatedBlog = await BlogRepository.update(id, updateData);
  console.log("===7=>",updateData);

  if (!updatedBlog) throw new Error("Update failed or blog not found.");
  return updatedBlog;
};
