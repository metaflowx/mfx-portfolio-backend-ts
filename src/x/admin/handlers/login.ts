import Elysia from "elysia";
import { adminModelType } from "../types/adminLogin";
import { adminLoginService } from "../services/login";

export const login = new Elysia().use(adminModelType).post(
  "/login",
  async ({ set, body }) => {
    try {
      const data = await adminLoginService(body);
      set.status = 200;
      return {
        success: true,
        message: "Login Successful",
        data: data,
      };
    } catch (error) {
      set.status = 500;
      return {
        success: false,
        message: error instanceof Error ? error.message : "Login Failed",
        data: error,
      };
    }
  },
  {
    body: "adminLogin.body",
    response: {},
  }
);
