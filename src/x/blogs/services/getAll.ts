import BlogRepository from "../repositories";

export const getAllBlogService = async (query: Record<string, string>) => {
  return await BlogRepository.readAll();
};