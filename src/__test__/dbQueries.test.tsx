import {
  getTotalExpenses,
  getTotalDonationsByDate,
  getTotalDonations,
} from "@/db/queries/finance";
import {
  getFirstDayOfMonth,
  getFirstDayOfYear,
  getLastDayOfMonth,
  getLastDayOfYear,
} from "@/lib/helpers/dateHelpers";
import { describe, it, expect } from "vitest";

describe.only("test db queries", () => {
  it("tests total expenses", async () => {
    expect(await getTotalExpenses()).toStrictEqual(
      JSON.parse(
        JSON.stringify([{ currency: "NGN", totalExpenses: "44806076.32" }])
      )
    );
  });

  it("tests total donations", async () => {
    expect(await getTotalDonations()).toStrictEqual(
      JSON.parse(
        JSON.stringify([{ currency: "NGN", totalDonations: "51161425.73" }])
      )
    );
  });

  it("tests total donations in 2023", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfYear(2023),
        getLastDayOfYear(2023)
      )
    ).toStrictEqual(
      JSON.parse(
        JSON.stringify([
          { currency: "NGN", groupedDate: "1", totalDonation: "1502036.33" },
          { currency: "NGN", groupedDate: "2", totalDonation: "1283508.51" },
          { currency: "NGN", groupedDate: "3", totalDonation: "1381870.13" },
          { currency: "NGN", groupedDate: "4", totalDonation: "2029562.70" },
          { currency: "NGN", groupedDate: "5", totalDonation: "1563785.45" },
          { currency: "NGN", groupedDate: "6", totalDonation: "1987193.51" },
          { currency: "NGN", groupedDate: "7", totalDonation: "1815793.50" },
          { currency: "NGN", groupedDate: "8", totalDonation: "1743245.62" },
          { currency: "NGN", groupedDate: "9", totalDonation: "1624813.75" },
          { currency: "NGN", groupedDate: "10", totalDonation: "1605898.35" },
          { currency: "NGN", groupedDate: "11", totalDonation: "2463882.80" },
          { currency: "NGN", groupedDate: "12", totalDonation: "2473364.75" },
        ])
      )
    );
  });

  it("tests total donations in April, 2024", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfMonth(2024, 3),
        getLastDayOfMonth(2024, 3)
      )
    ).toStrictEqual(
      JSON.parse(
        JSON.stringify([
          {
            currency: "NGN",
            groupedDate: "14",
            totalDonation: "623172.37",
          },
          {
            currency: "NGN",
            groupedDate: "15",
            totalDonation: "339230.67",
          },
          {
            currency: "NGN",
            groupedDate: "16",
            totalDonation: "555232.92",
          },
          {
            currency: "NGN",
            groupedDate: "17",
            totalDonation: "133698.70",
          },
          {
            currency: "NGN",
            groupedDate: "18",
            totalDonation: "177813.57",
          },
        ])
      )
    );
  });

  it("tests total donations in the 1st week of January, 2024", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfMonth(2024, 3),
        getLastDayOfMonth(2024, 3)
      )
    ).toStrictEqual(
      JSON.parse(
        JSON.stringify([
          {
            currency: "NGN",
            groupedDate: "14",
            totalDonation: "623172.37",
          },
          {
            currency: "NGN",
            groupedDate: "15",
            totalDonation: "339230.67",
          },
          {
            currency: "NGN",
            groupedDate: "16",
            totalDonation: "555232.92",
          },
          {
            currency: "NGN",
            groupedDate: "17",
            totalDonation: "133698.70",
          },
          {
            currency: "NGN",
            groupedDate: "18",
            totalDonation: "177813.57",
          },
        ])
      )
    );
  });
});
