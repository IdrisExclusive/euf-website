import "dotenv/config";
import {config} from "dotenv"
import type {Config} from "drizzle-kit";

config({ path: ".env.local" });

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
} satisfies Config;