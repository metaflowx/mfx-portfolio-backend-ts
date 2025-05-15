import Elysia from "elysia";
import { ResetPasswordModelType } from "../types";
import { resetPasswordService } from "../services";

export const resetPassword = new Elysia()
    .use(ResetPasswordModelType)
    .post('/resetPassword', async ({ set, body }) => {
        try {
            /// Call service to reset password
            const data = await resetPasswordService(body);

            set.status = 200;
            return {
                success: true,
                message: "Password reset successfully.",
                data: data
            };
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : "Failed to reset password",
                data: error
            };
        }
    }, {
        body: "resetPassword.body",
        response: {}
    });
