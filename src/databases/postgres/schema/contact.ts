import {
  pgTable,
  varchar,
  text,
  uuid,
 
} from "drizzle-orm/pg-core";

export const contact = pgTable("contact", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 25 }).notNull(),
  fullName: varchar({ length: 25 }).notNull(),
  email: varchar({ length: 25 }).notNull(),
  phone: varchar({ length: 25 }).notNull(),
  whatappNumber:varchar({length:25}),
  querry:varchar({length:1000}).notNull(),
  projectCategory: varchar({ length: 255 }).notNull(),
 
});

 