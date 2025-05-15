import  UserRepository  from "../repositories"


export const verifyOtpService = async (reqData: any) => {
    let { email, otp } = reqData;

    /// Convert empty email to null
    email = email?.trim() === "" ? null : email;

    if (!email) {
        throw new Error("Email is required.");
    }
    
    if (!otp) {
        throw new Error("OTP is required.");
    }

    /// Check if user exists
    const user = await UserRepository.readOne(email);
    
    if (!user) {
        throw new Error("User not found.");
    }

    /// Check if OTP matches and is not expired
    if (user.otp !== otp.toString()) {
        throw new Error("Invalid OTP.");
    }
    if (new Date(user.otpExpire) < new Date()) {
        throw new Error("OTP has been expired.");
    }

    /// Update user status to active and clear OTP
    if (email) {
        await UserRepository.update(user.id, { isOtpVerified: true, isVerified: true, isEmailVerified: true, updatedAt: new Date() });
    } 
   

    return {};
};