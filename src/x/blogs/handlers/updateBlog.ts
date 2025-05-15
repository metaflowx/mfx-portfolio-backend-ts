import { Elysia, t } from "elysia";
import { blogModelTypeUpdate } from "../types/updateBlog";
import { updateBlogService } from "../services/updateBlog";

export const updateBlog = new Elysia().use(blogModelTypeUpdate).put(
  "/updateBlog",
  async ({ query, body, set }) => {
    console.log("========>");

    try {
      const { id } = query;
      const updatedBlog = await updateBlogService(id, body);
      console.log("======>11111",updateBlog);

      return {
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog,
      };
    } catch (error) {
      set.status = 400;
      return {
        success: false,
        message: "Failed to update blog",
        error,
      };
    }
  },
  {
    body: "updateBlog.body",
    response: {},
  }
);
