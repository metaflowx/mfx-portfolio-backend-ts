import { Elysia } from "elysia";
import { blogModelType } from "../types/createBlog";
import { getBlogService } from "../services/getBlog";

export const getBlog = new Elysia().use(blogModelType).get(
  "/getBlog",
  async ({ query, set }) => {
    try {
      const { id } = query;

      const blog = await getBlogService(id);

      if (!blog) {
        set.status = 404;
        return { success: false, message: "Blog not found" };
      }
      return { success: true, data: blog };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get blog", error };
    }
  },
  {}
);
