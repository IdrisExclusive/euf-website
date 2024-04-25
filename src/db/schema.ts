import { relations, sql } from "drizzle-orm";
import type { AdapterAccount } from "next-auth/adapters";
import {
  pgTable,
  primaryKey,
  integer,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const role: [string, ...string[]] = ["ADMIN", "EXCO", "MEMBER"]

export const newsletterEmails = pgTable("newsletter_emails", {
  id: uuid("id")
    .notNull()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const emailSchema = createInsertSchema(newsletterEmails, {
  email: z.string().email({ message: "email is not vaild" }),
}).omit({ id: true, createdAt: true });

export const users = pgTable("user", {
  id: uuid("id")
    .notNull()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull().default(""),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: text("password").notNull().default(""),
  role: text("role", { enum: role }).default("MEMBER"),
  image: text("image"),
});

export const existingUserSchema = createInsertSchema(users, {
  email: z
    .string({ required_error: "Please enter your email" })
    .min(1, {message: "Please enter your email"})
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, {message: "Please enter your password"}),
}).omit({
  id: true,
  name: true,
  emailVerified: true,
  role: true,
  image: true,
});

export const newUserBackEndSchema = createSelectSchema(users, {
  name: z.string({ required_error: "Please provide your name" }).min(1, {message: "Please provide your name"}),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, {message: "Please enter your password"})
    .min(8, { message: "Password cannot be less than 8 characters" })
    .regex(/(?=.*[A-Z])\b/, {
      message: "Password must include an uppercase character",
    })
    .regex(/(?=.*[@$!%*?&,./-=+;:'"|#^~])/, {
      message: "Password must include one special character",
    }),
    role: z.enum(role).optional()
})
  .omit({
    id: true,
    emailVerified: true,
    image: true,
  })

export const newUserFrontEndSchema = createInsertSchema(users, {
  name: z.string({ required_error: "Please provide your name" }).min(1, {message: "Please provide your name"}),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, {message: "Please enter your password"})
    .min(8, { message: "Password cannot be less than 8 characters" })
    .regex(/(?=.*[A-Z])\b/, {
      message: "Password must include an uppercase character",
    })
    .regex(/(?=.*[@$!%*?&,./-=+;:'"|#^~])/, {
      message: "Password must include one special character",
    }),
})
  .omit({
    id: true,
    emailVerified: true,
    role: true,
    image: true,
  })
  .extend({
    confirmPassword: z
      .string({ required_error: "Please set your password" })
      .min(1, {message: "Please confirm your password"})
      .min(8, { message: "Password cannot be less than 8 characters" })
      .regex(/(?=.*[A-Z])/, {
        message: "Password must include an uppercase character",
      })
      .regex(/(?=.*[@$!%*?&,./-=+;:'"|#^~])/, {
        message: "Password must include one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword,
      {
        message: "Passwords don't match",
        path: ["confirmPassword",],
      }
  );

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
}));

export const accounts = pgTable(
  "account",
  {
    userId: uuid("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const sessions = pgTable("session", {
  id: uuid("id")
    .notNull()
    .default(sql`gen_random_uuid()`),
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
