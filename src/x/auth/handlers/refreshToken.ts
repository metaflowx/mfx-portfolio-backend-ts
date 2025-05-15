import Elysia from "elysia";
import { RefreshTokenModelType } from "../types";
import { refreshTokenService } from "../services";

export const refreshToken = new Elysia()
    .use(RefreshTokenModelType)
    .post('/refreshToken', async ({ set, headers }) => {
        try {
            const authHeader = headers.authorization;

            /// Ensure Authorization header is provided
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                set.status = 401;
                throw new Error("Authorization header with Bearer token is required.");
            }
            /// Extract refresh token from Authorization header
            const refreshToken = authHeader.split(" ")[1];
            const data = await refreshTokenService(refreshToken);

            set.status = 200;
            return {
                success: true,
                message: "New access token generated successfully.",
                data: data
            };
        } catch (error) {
            set.status = 401;
            return {
                success: false,
                message: error instanceof Error ? error.message : "Failed to refresh token",
                data: null
            };
        }
    }, {
        headers: "refreshToken.headers",
        response: {}
    });
