import { Elysia, t } from "elysia";

const userLoginSchemaRequest = t.Object({
  email: t.Optional(t.String()),
  password: t.String(),
});

export type UserLogin = typeof userLoginSchemaRequest.static;

export const loginModelType = new Elysia().model({
  "login.body": userLoginSchemaRequest,
  "login.response": userLoginSchemaRequest,
});
