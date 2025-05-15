import { Elysia } from "elysia";
import { blogModelType } from "../types/createBlog";
import { deleteBlogService } from "../services/deleteBlog";

export const deleteBlog = new Elysia()
  .use(blogModelType)
  .delete("/deleteBlog", async ({query, set }) => {
    try {
        const{id} = query
      const deleted = await deleteBlogService(id);
      return { success: true, message: "Blog deleted", data: deleted };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to delete blog", error };
    }
  }, 
    
);
