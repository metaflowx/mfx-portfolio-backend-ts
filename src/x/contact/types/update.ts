import { t, Elysia } from "elysia";

export const updatecontactParams = t.Object({
  id: t.Numeric(),
});

export const updatecontactBody = t.Object({
  yourName: t.String(),
  email: t.String(),
  phone: t.Number(),
  whatappNumber: t.Number(),
  budget: t.String(),
  projectCategory: t.String(),
  timeLine: t.String(),
  discription: t.String(),
});

export const contactModelTypeUpdate = new Elysia().model({
  "updatecontact.params": updatecontactParams,
  "updatecontact.body": updatecontactBody,
});

export type updatecontactRequest = typeof updatecontactBody.static;
export type updatecontactParamsType = typeof updatecontactParams.static;
