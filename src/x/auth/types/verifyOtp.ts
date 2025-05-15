import { Elysia, t } from "elysia"

const verifyOtpSchemaRequest = t.Object({
    email: t.Optional(t.String()),
    otp: t.String(),
})


export type VerifyOtp = typeof verifyOtpSchemaRequest.static

export const VerifyOtpModelType = new Elysia()
    .model({
        "verifyOtp.body": verifyOtpSchemaRequest,
        "verifyOtp.response": verifyOtpSchemaRequest
    })