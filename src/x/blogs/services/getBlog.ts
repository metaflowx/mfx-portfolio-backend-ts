import BlogRepository from "../repositories";
import { validate as isUuid } from 'uuid';

export const getBlogService = async (id: string) => {
  if (!isUuid(id)) {
    throw new Error("Invalid id: Must be a valid UUID.");
  }


  const blog = await BlogRepository.readOne(id);
  if (!blog) throw new Error("Blog not found.");

  return blog;
};
