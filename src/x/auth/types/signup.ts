import { Elysia, t } from "elysia"

const userSignupSchemaRequest = t.Object({
    email: t.Optional(t.String()),
    mobile: t.Optional(t.String()),
    password: t.String(),
    confirmPassword: t.String()
})


export type UserSignup = typeof userSignupSchemaRequest.static

export const SignupModelType = new Elysia()
    .model({
        "signup.body": userSignupSchemaRequest,
        "signup.response": userSignupSchemaRequest
    })