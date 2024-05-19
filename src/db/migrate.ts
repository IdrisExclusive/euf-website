import { migrate } from "drizzle-orm/neon-http/migrator";
import db from "./drizzle";
import { config } from "dotenv";

config({ path: ".env.local" });

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./src/db/drizzle" });

    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);

    process.exit(1);
  }
};

main();
