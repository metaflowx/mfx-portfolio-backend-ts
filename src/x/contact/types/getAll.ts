import { t, Elysia } from "elysia";

export const getAllcontactsQuery = t.Optional(
  t.Object({
    limit: t.Optional(t.Numeric()),
    offset: t.Optional(t.Numeric()),
  })
);

export const contactModelTypeGetAll = new Elysia().model({
  "getAllcontacts.query": getAllcontactsQuery,
});