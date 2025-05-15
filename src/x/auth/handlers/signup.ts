import Elysia from "elysia";
// import { hashPassword } from "../utils/hash"; // Function to hash passwords
import { SignupModelType } from "../types";
import { signupService } from "../services";

export const signup = new Elysia()
  .use(SignupModelType)
  .post('/signup', async ( {set ,body} )=>{
    try {
      const data = await signupService(body);
      set.status = 200;
      return {
        success: true,
        message: "Signup Successful",
        data: data
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Signup Failed",
        data: {}
      }
    }
  },
  {
    body:"signup.body",
    response: {
        
    }
  });
