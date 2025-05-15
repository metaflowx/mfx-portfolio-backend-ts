import { Elysia, t } from "elysia";

const adminLoginSchemaRequest = t.Object({
  email: t.Optional(t.String()),
  mobile: t.Optional(t.String()),
  password: t.String(),
});

export type AdminLogin = typeof adminLoginSchemaRequest.static;

export const adminModelType = new Elysia().model({
  "adminLogin.body": adminLoginSchemaRequest,
  "adminLogin.response": adminLoginSchemaRequest,
});
