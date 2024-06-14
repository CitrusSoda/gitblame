import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/db/schema/*',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
});
