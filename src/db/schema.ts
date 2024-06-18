import { relations, sql } from "drizzle-orm";
import type { AdapterAccount } from "next-auth/adapters";
import {
  pgTable,
  primaryKey,
  integer,
  text,
  timestamp,
  uuid,
  numeric,
  customType,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { role, expenseTypes, donationTypes } from "../lib/data/enums";

export const newsletterEmails = pgTable("newsletter_emails", {
  id: uuid("id")
    .notNull()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at", { mode: "date", withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const emailSchema = createInsertSchema(newsletterEmails, {
  email: z.string().email({ message: "Email is not vaild" }),
}).omit({ id: true, createdAt: true });

export const users = pgTable("user", {
  id: uuid("id")
    .notNull()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull().default(""),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    withTimezone: true,
  }),
  password: text("password").notNull().default(""),
  role: text("role", { enum: role }).default("MEMBER"),
  image: text("image"),
});

export const existingUserSchema = createInsertSchema(users, {
  email: z
    .string({ required_error: "Please enter your email" })
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, { message: "Please enter your password" }),
}).omit({
  id: true,
  // name: true,
  // emailVerified: true,
  // role: true,
  // image: true,
});

export const newUserBackEndSchema = createSelectSchema(users, {
  name: z
    .string({ required_error: "Please provide your name" })
    .min(1, { message: "Please provide your name" }),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, { message: "Please enter your password" })
    .min(8, { message: "Password cannot be less than 8 characters" })
    .regex(/(?=.*[A-Z])\b/, {
      message: "Password must include an uppercase character",
    })
    .regex(/(?=.*[@$!%*?&,./-=+;:'"|#^~])/, {
      message: "Password must include one special character",
    }),
  role: z.enum(role).optional(),
});
// .omit({
// id: true,
// emailVerified: true,
// image: true,
// });

export const newUserFrontEndSchema = createInsertSchema(users, {
  name: z
    .string({ required_error: "Please provide your name" })
    .min(1, { message: "Please provide your name" }),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Please set your password" })
    .min(1, { message: "Please enter your password" })
    .min(8, { message: "Password cannot be less than 8 characters" })
    .regex(/(?=.*[A-Z])\b/, {
      message: "Password must include an uppercase character",
    })
    .regex(/(?=.*\d)/, {
      message: "Password must include one number",
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
      .min(1, { message: "Please confirm your password" })
      .min(8, { message: "Password cannot be less than 8 characters" })
      .regex(/(?=.*[A-Z])/, {
        message: "Password must include an uppercase character",
      })
      .regex(/(?=.*\d)/, {
        message: "Password must include one number",
      })
      .regex(/(?=.*[@$!%*?&,./-=+;:'"|#^~])/, {
        message: "Password must include one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  donations: many(donations),
  expenses: many(expenses),
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
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date", withTimezone: true }).notNull(),
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
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

// Define a custom numeric type that converts to number
const customNumeric = customType<{
  data: number;
  driverData: string;
  config: { precision: number; scale: number };
}>({
  dataType(config) {
    return `numeric(${config?.precision}, ${config?.scale})`;
  },
  fromDriver(value: string): number {
    return parseFloat(value); // Convert string to number
  },
  toDriver(value: number): string {
    return value.toString(); // Convert number to string
  },
});

export const donations = pgTable("donations", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  donated_by: uuid("donated_by")
    .references(() => users.id, { onDelete: "set default" })
    .default("f47ac10b-58cc-4372-a567-0e02b2c3d479"),
  currency: text("currency"),
  amount: customNumeric("amount", { precision: 23, scale: 2 }).default(0),
  donation_type: text("donation_type", { enum: donationTypes }).default(
    "General Donation"
  ),
  created_at: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).defaultNow(),
  changed_at: timestamp("changed_at", {
    mode: "date",
    withTimezone: true,
  }),
  changed_by: uuid("changed_by")
    .references(() => users.id, {
      onDelete: "set default",
    })
    .default("f47ac10b-58cc-4372-a567-0e02b2c3d479"),
});

export const donationsRelations = relations(donations, ({ one }) => ({
  user: one(users, {
    fields: [donations.donated_by, donations.changed_by],
    references: [users.id, users.id],
  }),
}));

export const expenses = pgTable("expenses", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  expense_type: text("expense_type", { enum: expenseTypes }).default(
    "Bank Charges"
  ),
  currency: text("currency"),
  amount: customNumeric("amount", { precision: 23, scale: 2 }).default(0),
  created_at: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).defaultNow(),
  changed_at: timestamp("changed_at", {
    mode: "date",
    withTimezone: true,
  }).defaultNow(),
  changed_by: uuid("changed_by")
    .references(() => users.id, {
      onDelete: "set default",
    })
    .default("f47ac10b-58cc-4372-a567-0e02b2c3d479"),
});

export const expensesRelations = relations(expenses, ({ one }) => ({
  user: one(users, {
    fields: [expenses.changed_by],
    references: [users.id],
  }),
}));
