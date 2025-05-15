import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: '../../migrations',
  schema: './src/databases/postgres/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: Bun.env.DATABASE_URL!,
  },
});
