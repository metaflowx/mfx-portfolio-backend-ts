import Elysia from "elysia";
import { socialLoginModelType } from "../types";
import { socialLoginService } from "../services";

export const socialLogin = new Elysia()
    .use(socialLoginModelType)
    .post('/social-login', async ({ set,body }) => {
        try {
            const data = await socialLoginService(body)
            set.status = 200;
            return {
                success: true,
                message: "Login Successful",
                data: data
            }
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : "Login Failed",
                data: error
            }
        }
    },
    {
        body:"socialLogin.body",
        response: {}
    }
);
