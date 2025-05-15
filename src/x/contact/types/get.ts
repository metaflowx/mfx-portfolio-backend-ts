import { t, Elysia } from "elysia";

export const getcontactParams = t.Object({
  id: t.Numeric()
});

export const contactModelTypeGet = new Elysia().model({
  "getcontact.params": getcontactParams,
});

export type contactParams = typeof getcontactParams.static;