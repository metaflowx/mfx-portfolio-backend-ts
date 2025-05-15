import { Elysia, t } from "elysia";

/// Define request schema for Reset Password
const resetPasswordSchemaRequest = t.Object({
    email: t.Optional(t.String()),
    otp: t.String(),
    newPassword: t.String(),
    confirmPassword: t.String()
});

/// Define response schema (success message)
const resetPasswordSchemaResponse = t.Object({
    success: t.Boolean(),
    message: t.String()
});

export type ResetPasswordRequest = typeof resetPasswordSchemaRequest.static;

export const ResetPasswordModelType = new Elysia()
    .model({
        "resetPassword.body": resetPasswordSchemaRequest,
        "resetPassword.response": resetPasswordSchemaResponse
    });
