import { Elysia, t } from "elysia"

const adminSignupSchemaRequest = t.Object({
    email: t.Optional(t.String()),
    mobile: t.Optional(t.String()),
    password: t.String(),
    confirmPassword: t.String()
})


export type UserSignup = typeof adminSignupSchemaRequest.static

export const SignupModelType = new Elysia()
    .model({
        "signup.body": adminSignupSchemaRequest,
        "signup.response": adminSignupSchemaRequest
    })