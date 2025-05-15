import { createBlog } from "./createBlog";
import { getBlog } from "./getBlog";
import { getAllBlogs } from "./getAll";
import { updateBlog } from "./updateBlog";
import { deleteBlog } from "./deleteBlog";
import { uploadImage } from "./upload";

import Elysia from "elysia";

const xBlogHandler = new Elysia({
  prefix: "/blog",
  tags: ["blog Module"],
})
  .use(createBlog)
  .use(getBlog)
  .use(getAllBlogs)
  .use(deleteBlog)
  .use(updateBlog)
  .use(uploadImage)

export default xBlogHandler;
