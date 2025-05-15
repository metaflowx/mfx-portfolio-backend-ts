import Elysia from "elysia";
import { loginModelType } from "../types";
import { loginService } from "../services";

export const login = new Elysia()
    .use(loginModelType)
    .post('/login', async ({ set,body }) => {
        try {
            const data = await loginService(body)
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
        body:"login.body",
        response: {}
    }
);
