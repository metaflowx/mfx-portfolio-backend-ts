import { Elysia, t } from "elysia"

const resendOtpSchemaRequest = t.Object({
    email: t.Optional(t.String()),
})


export type ResendOtp = typeof resendOtpSchemaRequest.static

export const ResendOtpModelType = new Elysia()
    .model({
        "resendOtp.body": resendOtpSchemaRequest,
        "resendOtp.response": resendOtpSchemaRequest
    })