import {
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: uuid().primaryKey().defaultRandom(),
  image: varchar({ length: 255 }).notNull(),
  heading: varchar({ length: 1000 }).notNull(),
  author: varchar({ length: 25 }).notNull(),
  published: timestamp("published").notNull(),
  category: varchar({ length: 25 }).notNull(),
  paragraph: text().notNull(),
  images: varchar({ length: 255 }).notNull(),
  headings: varchar({ length: 255 }).notNull(),
  paragraphs: varchar({ length: 1000 }).notNull(),
  tags: text().notNull(),
  role: varchar({ length: 50 }).default("admin").notNull(),
});

