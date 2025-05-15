
import { t, Elysia } from "elysia";

export const deletecontactParams = t.Object({
  id: t.Numeric()
});

export const contactModelTypeDelete = new Elysia().model({
  "deletecontact.params": deletecontactParams,
});

export type deletecontactParamsType = typeof deletecontactParams.static;
