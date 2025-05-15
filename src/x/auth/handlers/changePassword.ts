import Elysia from "elysia";
import { ChangePasswordModelType } from "../types";
import { changePasswordService } from "../services";

export const changePassword = new Elysia()
    .use(ChangePasswordModelType)
    .post('/changePassword', async ({ set, headers, body }) => {
        try {
            const authHeader = headers.authorization;
            /// Ensure Authorization header is provided
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                set.status = 401;
                throw new Error("Authorization header with Bearer token is required.");
            }
            const token = authHeader.split(" ")[1];

            /// Call service to change password
            const data = await changePasswordService(token, body);

            set.status = 200;
            return {
                success: true,
                message: "Password changed successfully.",
                data: data
            };
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : "Failed to change password",
                data: error
            };
        }
    }, {
        headers: "changePassword.headers",
        body: "changePassword.body",
        response: {}
    });
