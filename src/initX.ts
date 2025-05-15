import { Elysia } from "elysia"; 
import xBlogHandlers from "./x/blogs/handlers";
import xcontactHandlers from "./x/contact/handlers";
import xAdminHandlers from "./x/admin/handlers";

const initX = new Elysia({ prefix: "api/v1" })
  .use(xBlogHandlers)
  .use(xcontactHandlers)
  .use(xAdminHandlers)

export default initX;
