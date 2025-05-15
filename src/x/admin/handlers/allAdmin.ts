import { Elysia } from "elysia";
import { SignupModelType } from "../types/signup";
import { getAllAdminService} from "../services/getAll";

export const getAllAdmin = new Elysia()
  .use(SignupModelType)
  .get("/getAll", async ({ query, set }) => {
    try {
      const admin = await getAllAdminService(query);
      return { success: true, data: admin };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get admins", error };
    }
  }, {
    
});