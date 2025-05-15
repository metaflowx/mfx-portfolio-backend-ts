import UserRepository from "../repositories";
import {verifyPassword}  from "../../../utils/hash"
import { signToken } from "../../../utils";

export const loginService = async (loginData: any) => {
    let { email, mobile, password } = loginData;

    /// Convert empty email or mobile to null
    email = email?.trim() === "" ? null : email;
    // mobile = mobile?.trim() === "" ? null : mobile;
    if (!email) {
        throw new Error("Email is required.");
    }

    /// Check if user already exists
    const existingUser = await UserRepository.readOne(email);
    if (!existingUser) {
        throw new Error("This account not exists;please sign up.");
    }
    
    /// verify the password before login
    const hashedPassword = await verifyPassword(password, existingUser.password);
    if (!hashedPassword) {
        throw new Error("Your account password is incorrect;please check password.");
    }
    /// Check  user is verified
    if (!existingUser.isVerified ) {
        throw new Error("Your account is not verified;please verify Your Account.");
    }

    /// Generate JWT token
    const token = await signToken({ id: existingUser.id, role: existingUser.role });

    return { existingUser, token}

};
