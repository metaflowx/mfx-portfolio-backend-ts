import  AdminRepository  from "../repositories"
import {hashPassword}  from "../../../utils/hash"
// import { generateOTP } from '../../../utils/functions';
// import { sendOTP } from '../../../utils/mailer';
import fetch from "cross-fetch";


export const signupService = async (adminData: any) => {
    let { email, mobile, password, confirmPassword } = adminData;

    if ( password !== confirmPassword){
        throw new Error("Password or confirmPassword not match.");
    }

    /// Convert empty email or mobile to null
    email = email?.trim() === "" ? null : email;
    mobile = mobile?.trim() === "" ? null : mobile;
    if (!email && !mobile ) {
        throw new Error("Email and moblie number is required.");
    }

    // if (email && mobile ) {
    //     throw new Error("Either email or mobile number is required for signup, but not both.");
    // }
    /// Check if user already exists
    const existingUser = await AdminRepository.readOne(email);
    if (existingUser) {
        throw new Error("This account already exists; please log in.");
    }

     /// Hash the password before storing
     const hashedPassword = await hashPassword(password);

    //  /// Generate 6-digit OTP
    //  const otp = await generateOTP();
    //  console.log('otp =====:>> ', otp);

    /// Create the user in database
     const newUser = await AdminRepository.create({ ...adminData, password: hashedPassword});
     if(!newUser) throw new Error('User not found')

    // if (email) {
    //     await sendOTP(email, otp);
    // } else {
    //     await fetch(`https://2factor.in/API/V1/${Bun.env.Sms_Api_key}/SMS/${mobile}/${otp}`);
    // }
    return {
        id: newUser.id,
        email: newUser.email,
        mobile: newUser.mobile,
        status: newUser.status,
        role: newUser.role
    };
}
