import type { Config } from "drizzle-kit";
import "dotenv/config";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL || DATABASE_URL.length === 0)
  throw new Error(
    "❌ No DATABASE_URL found. Remember to add it to your .env file"
  );

const config: Config = {
  schema: "./src/database/schemas.ts",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    connectionString: `${DATABASE_URL}?ssl={"rejectUnauthorized":true}`,
  },
};

export default config;
