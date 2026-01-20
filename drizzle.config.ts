import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if(!process.env.DATABASE_URL){
    throw new Error('Database URL not set in .env')
}

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});