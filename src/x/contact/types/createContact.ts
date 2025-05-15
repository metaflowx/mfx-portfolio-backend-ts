import { t, Elysia } from "elysia";

export const createcontactSchemaRequest = t.Object({
  name: t.String(),
  fullName: t.String(),
  email: t.String(),
  phone: t.Number(),
  whatappNumber: t.Number(),
  projectCategory: t.Optional(t.String()),
  querry: t.Optional(t.String())
});

export const createcontactSchemaResponse = t.Object({
  name: t.String(),
  fullName: t.String(),
  email: t.String(),
  phone: t.Number(),
  whatappNumber: t.Number(),
  projectCategory: t.Optional(t.String()),
  querry: t.Optional(t.String())
});

export const contactModelType = new Elysia().model({
  "createContact.body": createcontactSchemaRequest,
  "createcontact.response": createcontactSchemaResponse,
});

export type contactRequest = typeof createcontactSchemaRequest.static;
export type contactResponse = typeof createcontactSchemaResponse.static;