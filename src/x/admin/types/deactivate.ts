import { Elysia,t } from "elysia"

const deactivateProfileSchemaRequest = t.Object({
    email: t.String(),
    status: t.String()
})

export type profileRequest = typeof deactivateProfileSchemaRequest.static

export const deactivateModelType = new Elysia()
    .model({
        "deactivateUser.body": deactivateProfileSchemaRequest,
        "deactivateUser.response": deactivateProfileSchemaRequest,
    })