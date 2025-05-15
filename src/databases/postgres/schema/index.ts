import { drizzle } from "drizzle-orm/postgres-js";
import Bun from "bun";
export const db = drizzle(
  "postgresql://postgres.ewwpbeahoabhzikaorlx:blog@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);
export * from "./common";
export * from "./users";
