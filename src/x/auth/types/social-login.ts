import { Elysia,t } from "elysia"

const socialLoginSchemaRequest= t.Object({
    token: t.String(),
    provider: t.String(),

})


export type SocialLogin = typeof socialLoginSchemaRequest.static


export const socialLoginModelType = new Elysia()
    .model({
        "socialLogin.body": socialLoginSchemaRequest,
        "socialLogin.response": socialLoginSchemaRequest,
    })