import { ilike, or, and, sum, eq, sql, gte, lte, asc } from "drizzle-orm";
import db from "../drizzle";
import { donations, expenses, users } from "../schema";
import {
  firstDayOfCurrentYear,
  getDateGroup,
  lastDayOfCurrentYear,
} from "@/lib/helpers/dateHelpers";

const getTotalDonations = async () => {
  return await db
    .select({
      currency: donations.currency,
      totalDonations: sum(donations.amount),
    })
    .from(donations)
    .groupBy(donations.currency);
};

const getTotalExpenses = async () => {
  return await db
    .select({
      currency: expenses.currency,
      totalExpenses: sum(expenses.amount),
    })
    .from(expenses)
    .groupBy(expenses.currency);
};

const getTotalExpensesByExpenseType = async () => {
  return await db
    .select({
      expenseType: expenses.expense_type,
      currency: expenses.currency,
      getTotalExpenses: expenses.amount,
    })
    .from(expenses)
    .groupBy(expenses.expense_type, expenses.currency);
};

const getAllDonationsByOffset = async (limit: number, offset: number) => {
  return await db.select().from(donations).limit(limit).offset(offset);
};

const getAllDonationsByQuery = async (
  limit: number,
  offset: number,
  query: string
) => {
  return await db
    .select()
    .from(donations)
    .where(
      or(
        ilike(donations.amount, `%${query}%`),
        ilike(donations.currency, `%${query}%`),
        ilike(donations.created_at, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset);
};

const getAllDonationsByUsers = async (
  limit: number,
  offset: number,
  query: string
) => {
  return await db
    .select({
      email: users.email,
      name: users.name,
      image: users.image,
      amount: donations.amount,
      currency: donations.currency,
      donationCategory: donations.donation_type,
      date: donations.created_at,
    })
    .from(users)
    .innerJoin(donations, eq(users.id, donations.donated_by))
    .where(
      or(
        ilike(users.email, `%${query}%`),
        ilike(users.name, `%${query}%`),
        ilike(donations.amount, `%${query}%`),
        ilike(donations.currency, `%${query}%`),
        ilike(donations.donation_type, `%${query}%`),
        ilike(donations.created_at, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset);
};

const getAllExpensesByOffset = async (limit: number, offset: number) => {
  return await db.select().from(expenses).limit(limit).offset(offset);
};

const getAllExpensesByQuery = async (
  limit: number,
  offset: number,
  query: string
) => {
  return await db
    .select()
    .from(expenses)
    .where(
      or(
        ilike(expenses.amount, `%${query}%`),
        ilike(expenses.currency, `%${query}%`),
        ilike(expenses.created_at, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset);
};

const getTotalDonationsByDate = async (
  startDate: Date = firstDayOfCurrentYear,
  endDate: Date = lastDayOfCurrentYear
) => {
  const dateGroup = getDateGroup(startDate, endDate);

  return await db
    .select({
      currency: donations.currency,
      totalDonation: sum(donations.amount),
      groupedDate: sql<number>`EXTRACT(${sql.raw(dateGroup)} FROM ${donations.created_at})`,
    })
    .from(donations)
    .where(
      and(
        gte(donations.created_at, startDate),
        lte(donations.created_at, endDate)
      )
    )
    .groupBy(
      sql`EXTRACT(${sql.raw(dateGroup)} FROM ${donations.created_at})`,
      donations.currency
    )
    .orderBy(
      asc(sql`EXTRACT(${sql.raw(dateGroup)} FROM ${donations.created_at})`)
    );
};

const getDonationsByDate = (
  startDate: Date = firstDayOfCurrentYear,
  endDate: Date = lastDayOfCurrentYear
) => {
  const dateGroup = getDateGroup(startDate, endDate);
};

export {
  getTotalDonations,
  getTotalExpenses,
  getTotalExpensesByExpenseType,
  getAllDonationsByOffset,
  getAllDonationsByQuery,
  getAllDonationsByUsers,
  getAllExpensesByOffset,
  getAllExpensesByQuery,
  getTotalDonationsByDate,
};
