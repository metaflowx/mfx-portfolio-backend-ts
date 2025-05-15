import UserRepository from "../repositories";
import { generateOTP } from "../../../utils/functions";
import { sendOTP } from "../../../utils/mailer";
import fetch from "cross-fetch";

export const resendOTPService = async (reqData: any) => {
    let { email} = reqData;

    /// Convert empty email or mobile to null
    email = email?.trim() === "" ? null : email;

    if (!email) {
        throw new Error("Email is required.");
    }

    /// Check if user exists
    const existingUser = await UserRepository.readOne(email);
    if (!existingUser) {
        throw new Error("User not found. Please sign up first.");
    }

    /// Generate new 6-digit OTP
    const otp = await generateOTP();

    /// Update user OTP and expiry time
    await UserRepository.update(existingUser.id, {
        otp: otp.toString(),
        otpExpire: new Date(Date.now() + 5 * 60 * 1000),
        updatedAt: new Date()
    });

    /// Send OTP via Email or SMS
    if (email) {
        await sendOTP(email, otp);
    } 
    // else {
    //     await fetch(`https://2factor.in/API/V1/${Bun.env.Sms_Api_key}/SMS/${mobile}/${otp}`);
    // }

    return {};
};
