import Elysia from "elysia";
import { SignupModelType } from "../types/signup";
import { signupService } from "../services/signup";

export const signup = new Elysia().use(SignupModelType).post(
  "/signup",
  async ({ set, body }) => {
    try {
      const data = await signupService(body);
      set.status = 200;
      return {
        success: true,
        message: "Signup Successful",
        data: data,
      };
    } catch (error) {
        set.status = 500;
      return {
        success: false,
        message: error instanceof Error ? error.message : "Signup Failed",
        data: {},
      };
    }
  },
  {
    body: "signup.body",
    response: {},
  }
);
