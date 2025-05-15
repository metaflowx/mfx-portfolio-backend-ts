import { StringChunk } from "drizzle-orm";
import BlogRepository from "../repositories";

export const deleteBlogService = async (id: string) => {
  const deletedBlog = await BlogRepository.delete(id);
  if (!deletedBlog) throw new Error("Delete failed or blog not found.");
  return deletedBlog;
};
