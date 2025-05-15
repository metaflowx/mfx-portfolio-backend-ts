import { defineConfig } from 'drizzle-kit';
import Bun from "bun";
export default defineConfig({
  out: "./src/configs/drizzle",
  schema: './src/databases/postgres/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url:"postgresql://postgres.ewwpbeahoabhzikaorlx:blog@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
});


