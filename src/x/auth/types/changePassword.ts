import { Elysia, t } from "elysia";

/// Define request schema for change password
const changePasswordSchemaRequest = t.Object({
    authorization: t.String(), /// Bearer Token is required in the headers
    oldPassword: t.String(),
    newPassword: t.String(),
    confirmNewPassword: t.String()
});

/// Define response schema (success message)
const changePasswordSchemaResponse = t.Object({
    success: t.Boolean(),
    message: t.String()
});

export type ChangePasswordRequest = typeof changePasswordSchemaRequest.static;

export const ChangePasswordModelType = new Elysia()
    .model({
        "changePassword.headers": t.Object({ authorization: t.String() }), /// Header contains Bearer Token
        "changePassword.body": t.Object({
            oldPassword: t.String(),
            newPassword: t.String(),
            confirmNewPassword: t.String()
        }),
        "changePassword.response": changePasswordSchemaResponse
    });