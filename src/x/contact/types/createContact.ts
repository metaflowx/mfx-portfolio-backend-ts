import { t, Elysia } from "elysia";

export const createcontactSchemaRequest = t.Object({
  yourName: t.String(),
  email: t.String(),
  phone: t.Number(),
  whatappNumber: t.Number(),
  budget: t.String(),
  projectCategory: t.String(),
  timeLine: t.String(),
  discription: t.String(),
});

export const createcontactSchemaResponse = t.Object({
  yourName: t.String(),
  email: t.String(),
  phone: t.Number(),
  whatappNumber: t.Number(),
  budget: t.String(),
  projectCategory: t.String(),
  timeLine: t.String(),
  discription: t.String(),
});

export const contactModelType = new Elysia().model({
  "createContact.body": createcontactSchemaRequest,
  "createcontact.response": createcontactSchemaResponse,
});

export type contactRequest = typeof createcontactSchemaRequest.static;
export type contactResponse = typeof createcontactSchemaResponse.static;
