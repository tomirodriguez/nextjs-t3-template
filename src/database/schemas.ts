import {
  mysqlTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable(
  "users",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 256 }).notNull(),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    profilePicture: varchar("profile_picture", { length: 256 }),
    birthday: timestamp("birthday"),
  },
  (users) => ({
    emailIndex: uniqueIndex("email_idx").on(users.email),
  })
);
