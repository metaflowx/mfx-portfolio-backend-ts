import Elysia from "elysia";
import { VerifyOtpModelType } from "../types";
import { verifyOtpService } from "../services";

export const verifyOtp = new Elysia()
    .use(VerifyOtpModelType)
    .post('/verifyOtp', async ({ set,body }) => {
        try {
            const data = await verifyOtpService(body)
            set.status = 200;
            return {
                success: true,
                message: "OTP verified successfully. Your account is now active.",
                data: data
            }
        } catch (error) {
            return {
                success: false,
                message: error instanceof Error ? error.message : "OTP verification Failed",
                data: error
            }
        }
    },
    {
        body:"verifyOtp.body",
        response: {
            
        }
    }
);
