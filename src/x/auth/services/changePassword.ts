import { verifyToken } from "../../../utils";
import { hashPassword, verifyPassword } from "../../../utils/hash";
import UserRepository  from "../repositories";

export const changePasswordService = async (token: string, userData:any) => {
    if (!token) {
        throw new Error("Authorization token is required.");
    }

    try {
        /// Verify access token
        const decoded = await verifyToken(token);
        if (!decoded || !decoded.id) {
            throw new Error("Invalid or expired token.");
        }
        const { oldPassword, newPassword , confirmNewPassword} = userData;
        
        /// Validate input
        if (!oldPassword || !newPassword || !confirmNewPassword) {
            throw new Error("Old password, new password, and confirm new password are required.");
        }else if (oldPassword === newPassword) {
            throw new Error("New password cannot be the same as the old password. Please choose a different password.");
        }else if (newPassword !== confirmNewPassword) {
            throw new Error("New password and confirm password do not match. Please enter the same password in both fields.");
        }

        /// Fetch user by ID
        const user = await UserRepository.readOneByID(decoded.id as string);
        if (!user) {
            throw new Error("User not found.");
        }
        const isMatch = await verifyPassword(oldPassword, user.password);
        if (!isMatch) {
            throw new Error("Incorrect old password.");
        }

        /// Hash new password
        const hashedPassword = await hashPassword(newPassword);

        /// Update user password in the database
        await UserRepository.update(user.id, { password: hashedPassword, updatedAt: new Date() });

        return {}; 

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to change password.");
    }
};
