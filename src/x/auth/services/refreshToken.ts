import { verifyToken } from "../../../utils";
import { signToken } from "../../../utils";

export const refreshTokenService = async (refreshToken: string) => {
    if (!refreshToken) {
        throw new Error("Refresh token is required.");
    }
    try {
        /// Verify refresh token
        const decoded = await verifyToken(refreshToken);
        if (decoded == null) {
            throw new Error("Invalid or expired token."); 
        }
        /// Generate a new access token
        const token = await signToken({ id: decoded.id, role: decoded.role });
        return {
            accessToken: token,
        };
    } catch (error) {
        throw new Error("Invalid or expired token.");
    }
};
