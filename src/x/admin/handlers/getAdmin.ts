import { Elysia } from "elysia";
import { SignupModelType } from "../types/signup";
import { getAdminService } from "../services/getAdmin";

export const getAdmin = new Elysia().use(SignupModelType).get(
  "/getadmin",
  async ({ query, set }) => {
    try {
      const { id } = query;

      const admin = await getAdminService(id);

      if (!admin) {
        set.status = 404;
        return { success: false, message: "Admin not found" };
      }
      return { success: true, data: admin };
    } catch (error) {
      set.status = 400;
      return { success: false, message: "Failed to get admin", error };
    }
  },
  {}
);
