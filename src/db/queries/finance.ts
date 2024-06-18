"use server";

import { ilike, or, and, sum, eq, sql, gte, lte, desc, asc } from "drizzle-orm";
import { db } from "../drizzle";
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
      totalDonations: sum(donations.amount).mapWith(Number),
    })
    .from(donations)
    .groupBy(donations.currency);
};

const getTotalDonationsByCurrency = async (currency: string = "NGN") => {
  return await db
    .select({ totalDonations: sum(donations.amount).mapWith(Number) })
    .from(donations)
    .where(eq(donations.currency, currency));
};

const getAllCurrencyForDonations = async () => {
  return await db
    .selectDistinct({ currency: donations.currency })
    .from(donations);
};

const getTotalDonationsByType = async () => {
  return await db
    .select({
      donationType: donations.donation_type,
      currency: donations.currency,
      TotalDonations: sum(donations.amount).mapWith(Number),
    })
    .from(donations)
    .groupBy(donations.donation_type, donations.currency);
};

const getTotalExpenses = async () => {
  return await db
    .select({
      currency: expenses.currency,
      totalExpenses: sum(expenses.amount).mapWith(Number),
    })
    .from(expenses)
    .groupBy(expenses.currency);
};

const getTotalExpensesByType = async () => {
  return await db
    .select({
      expenseType: expenses.expense_type,
      currency: expenses.currency,
      TotalExpenses: sum(expenses.amount).mapWith(Number),
    })
    .from(expenses)
    .groupBy(expenses.expense_type, expenses.currency);
};

const getAllDonationsByOffset = async (limit: number, offset: number) => {
  return await db
    .select()
    .from(donations)
    .limit(limit)
    .offset(offset)
    .orderBy(desc(donations.created_at));
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
        ilike(donations.donation_type, `%${query}%`),
        ilike(donations.currency, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset)
    .orderBy(desc(donations.created_at));
};

const getAllDonationsByUsers = async (
  limit: number,
  offset: number,
  query: string = ""
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
        ilike(donations.currency, `%${query}%`),
        ilike(donations.donation_type, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset)
    .orderBy(desc(donations.created_at));
};

const getAllExpensesByOffset = async (limit: number, offset: number) => {
  return await db
    .select()
    .from(expenses)
    .limit(limit)
    .offset(offset)
    .orderBy(desc(expenses.created_at));
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
        ilike(expenses.currency, `%${query}%`),
        ilike(expenses.expense_type, `%${query}%`)
      )
    )
    .limit(limit)
    .offset(offset)
    .orderBy(desc(expenses.created_at));
};

const getTotalDonationsByDate = async (
  startDate: Date = firstDayOfCurrentYear,
  endDate: Date = lastDayOfCurrentYear
) => {
  const dateGroup = getDateGroup(startDate, endDate);

  return await db
    .select({
      currency: donations.currency,
      totalDonation: sum(donations.amount).mapWith(Number),
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

const getDonationsByDate = async (
  startDate: Date = firstDayOfCurrentYear,
  endDate: Date = lastDayOfCurrentYear
) => {
  const dateGroup = getDateGroup(startDate, endDate);

  return await db
    .select()
    .from(donations)
    .where(
      and(
        gte(donations.created_at, startDate),
        lte(donations.created_at, endDate)
      )
    )
    .orderBy(
      desc(sql`EXTRACT(${sql.raw(dateGroup)} FROM ${donations.created_at})`)
    );
};

export {
  getTotalDonations,
  getTotalDonationsByCurrency,
  getAllCurrencyForDonations,
  getTotalExpenses,
  getTotalDonationsByType,
  getTotalExpensesByType,
  getAllDonationsByOffset,
  getAllDonationsByQuery,
  getAllDonationsByUsers,
  getAllExpensesByOffset,
  getAllExpensesByQuery,
  getTotalDonationsByDate,
  getDonationsByDate,
};
