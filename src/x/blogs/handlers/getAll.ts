import { Elysia } from "elysia";
import { blogModelType } from "../types/createBlog";
import { getAllBlogService} from "../services/getAll";

export const getAllBlogs = new Elysia()
  .use(blogModelType)
  .get("/getAllBlogs", async ({ query, set }) => {
    try {
      const blogs = await getAllBlogService(query);
      return { success: true, data: blogs };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get blogs", error };
    }
  }, {
    
  });