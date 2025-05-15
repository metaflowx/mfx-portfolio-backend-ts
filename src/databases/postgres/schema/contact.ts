import { pgTable, varchar, text, uuid } from "drizzle-orm/pg-core";

export const contact = pgTable("contact", {
  id: uuid().primaryKey().defaultRandom(),
  yourName: varchar({ length: 25 }).notNull(),
  email: varchar({ length: 30 }).notNull(),
  phone: varchar({ length: 25 }).notNull(),
  whatappNumber: varchar({ length: 25 }),
  budget: varchar({ length: 25 }).notNull(),
  projectCategory: varchar({ length: 255 }).notNull(),
  timeLine: varchar({ length: 255 }).notNull(),
  discription: varchar({ length: 1000 }).notNull(),
});
