import Elysia from "elysia";
import { ResendOtpModelType } from "../types";
import { resendOTPService } from "../services";

export const resendOtp = new Elysia()
    .use(ResendOtpModelType)
    .post('/resendOtp', async ({ set,body }) => {
        try {
            const data = await resendOTPService(body)
            set.status = 200;
            return {
                success: true,
                message: "OTP has been resent successfully.",
                data: data
            }
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : "OTP resend Failed",
                data: error
            }
        }
    },
    {
        body:"resendOtp.body",
        response: {
            
        }
    }
);
