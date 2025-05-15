import { Elysia } from "elysia";
import { blogModelType } from "../types/createBlog";
import { createBlogService } from "../services/createBlog";
import { ConsoleLogWriter } from "drizzle-orm";

export const createBlog = new Elysia().use(blogModelType).post(
  "/createBlog",
  async ({ body, set }) => {
    

    try {
      

      const blog = await createBlogService(body);
     
      set.status = 200;
      return {
        success: true,
        message: "Blog created successfully",
        data: blog,
      };
    } catch (error) {
      set.status = 400;
      return {
        success: false,
        message: "Blog creation failed",
        error,
      };
    }
  },

  {
    body: "createBlog.body",
    response: {},
  }
);
