import { Elysia, t } from "elysia"

/// Define request schema for refresh token
const refreshTokenSchemaRequest = t.Object({
    authorization: t.String() /// Refresh token is required
});

/// Define response schema (returns new access token)
const refreshTokenSchemaResponse = t.Object({
    accessToken: t.String() /// New access token
});

export type RefreshTokenRequest = typeof refreshTokenSchemaRequest.static;

export const RefreshTokenModelType = new Elysia()
    .model({
        "refreshToken.headers": refreshTokenSchemaRequest,
        "refreshToken.response": refreshTokenSchemaResponse
    });