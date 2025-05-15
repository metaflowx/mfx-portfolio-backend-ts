
import { boolean, integer, pgEnum, pgTable, varchar , timestamp, uuid } from "drizzle-orm/pg-core";
import timestamps from "./common";

// export const userStatusEnum =  pgEnum("status", ["ACTIVE", "INACTIVE", "BLOCKED"]);

export const admin = pgTable('admin', {
    id: uuid().primaryKey().defaultRandom(),
    email: varchar().unique(),
    mobile: varchar().unique(),
    password: varchar().notNull(),
    role: varchar().default('ADMIN'),
    status: varchar().default('ACTIVE'),
  
    ...timestamps
  })
  