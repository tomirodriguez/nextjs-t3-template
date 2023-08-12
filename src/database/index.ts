import { env } from "@/env.mjs";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schemas from "./schemas";

// create the connection
const connection = connect({
  host: env.DATABASE_HOST,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
});

export const db = drizzle(connection, { schema: { ...schemas } });
