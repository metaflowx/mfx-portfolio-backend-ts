import UserRepository from "../repositories";
import { hashPassword, verifyPassword } from "../../../utils/hash";

export const resetPasswordService = async (userData: any) => {
    const { email, otp, newPassword, confirmPassword } = userData;

    /// Validate input
    if (!email || !otp || !newPassword || !confirmPassword){
        throw new Error("Email, OTP, new password, and confirm password are required.");
    }
   
    if (newPassword !== confirmPassword) {
        throw new Error("New password and confirm password do not match. Please enter the same password in both fields.");
    }

    try {
        /// Fetch user by email or mobile
        const user = await UserRepository.readOne(email);
        if (!user) {
            throw new Error("User not found.");
        }

        /// Verify OTP
        if (user.otp !== otp.toString()) {
            throw new Error("Invalid OTP.");
        }
        if (new Date(user.otpExpire) < new Date()) {
            throw new Error("OTP has expired.");
        }

        const isMatch = await verifyPassword(confirmPassword, user.password);
        if (isMatch) {
            throw new Error("You can not set this password.Please enter the another password");
        }

        /// Hash new password
        const hashedPassword = await hashPassword(newPassword);

        /// Update user password in the database and clear OTP
        await UserRepository.update(user.id, { password: hashedPassword, updatedAt: new Date() });

        return {};
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to reset password.");
    }
};
