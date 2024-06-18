import {
  getTotalExpenses,
  getTotalDonationsByDate,
  getTotalDonations,
  getTotalExpensesByType,
  getTotalDonationsByType,
  getAllDonationsByOffset,
  getAllExpensesByOffset,
  getAllDonationsByQuery,
  getDonationsByDate,
  getTotalDonationsByCurrency,
  getAllCurrencyForDonations,
} from "@/db/queries/finance";
import {
  getFirstDayOfMonth,
  getFirstDayOfYear,
  getLastDayOfMonth,
  getLastDayOfYear,
} from "@/lib/helpers/dateHelpers";
import { describe, it, expect } from "vitest";

describe("test db queries", () => {
  it("tests total expenses", async () => {
    expect(await getTotalExpenses()).toStrictEqual([
      { currency: "NGN", totalExpenses: 40855164.55 },
    ]);
  });

  it("tests total donations", async () => {
    expect(await getTotalDonations()).toStrictEqual([
      { currency: "NGN", totalDonations: 49224031.91 },
    ]);
  });

  it("get total donations by currency", async () => {
    expect(await getTotalDonationsByCurrency()).toStrictEqual([
      {
        totalDonations: 49224031.91,
      },
    ]);
  });

  it("get lists of currencies for donations", async () => {
    expect(await getAllCurrencyForDonations()).toStrictEqual([
      { currency: "NGN" },
    ]);
  });

  it("tests total donations by type", async () => {
    expect(await getTotalDonationsByType()).toStrictEqual([
      {
        TotalDonations: 2902165.39,
        currency: "NGN",
        donationType: "Ashura Feeding",
      },
      {
        TotalDonations: 2078120.3,
        currency: "NGN",
        donationType: "Muharram Feeding",
      },
      {
        TotalDonations: 1111522.97,
        currency: "NGN",
        donationType: "Masjid Renovation",
      },
      {
        TotalDonations: 11062147.09,
        currency: "NGN",
        donationType: "Ramadan Feeding",
      },
      {
        TotalDonations: 6972082.38,
        currency: "NGN",
        donationType: "Borehole Project",
      },
      {
        TotalDonations: 25059279.88,
        currency: "NGN",
        donationType: "General Donation",
      },
      {
        TotalDonations: 38713.9,
        currency: "NGN",
        donationType: "Well Project",
      },
    ]);
  });

  it("tests total expenses by type", async () => {
    expect(await getTotalExpensesByType()).toStrictEqual([
      {
        TotalExpenses: 737507.67,
        currency: "NGN",
        expenseType: "Masjid Renovation",
      },
      {
        TotalExpenses: 26751.38,
        currency: "NGN",
        expenseType: "Bank Charges",
      },
      {
        TotalExpenses: 641004.18,
        currency: "NGN",
        expenseType: "Muharram Feeding",
      },
      {
        TotalExpenses: 451772.98,
        currency: "NGN",
        expenseType: "Ashura Feeding",
      },
      {
        TotalExpenses: 14107781.81,
        currency: "NGN",
        expenseType: "Ramadan Feeding",
      },
      {
        TotalExpenses: 24890346.53,
        currency: "NGN",
        expenseType: "Borehole Project",
      },
    ]);
  });

  it("tests total donations from offset of 50, and limit 20", async () => {
    expect((await getAllDonationsByOffset(20, 50)).length).toEqual(20);
  });

  it("tests total expense from offset of 70, and limit 10", async () => {
    expect((await getAllExpensesByOffset(10, 70)).length).toEqual(10);
  });

  it("tests donations that matches Muharram, limit 5", async () => {
    expect(await getAllDonationsByQuery(5, 0, "muharram")).toStrictEqual([
      {
        amount: 59163.93,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-04-28T10:06:41.787Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Muharram Feeding",
        id: "413e3ebd-0992-4b73-a3cd-b478a26aec2a",
      },
      {
        amount: 99626.69,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-04-12T04:16:25.811Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Muharram Feeding",
        id: "8d6dff09-b1ce-46ce-b4f2-eb22eba1afe9",
      },
      {
        amount: 28067.4,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-04-05T19:58:08.741Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Muharram Feeding",
        id: "7665e14c-2e10-48a2-a01c-4878bb0e4f10",
      },
      {
        amount: 67874.18,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-02-15T01:06:03.915Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Muharram Feeding",
        id: "622cf4a9-5a12-415b-9269-a1206d3946e4",
      },
      {
        amount: 81091.62,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-02-11T16:15:07.544Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Muharram Feeding",
        id: "28388245-2d54-4388-bbc3-6a6029fdb37b",
      },
    ]);
  });

  it("tests total donations in 2023", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfYear(2023),
        getLastDayOfYear(2023)
      )
    ).toStrictEqual([
      {
        currency: "NGN",
        groupedDate: "1",
        totalDonation: 2207139.33,
      },
      {
        currency: "NGN",
        groupedDate: "2",
        totalDonation: 1800699.64,
      },
      {
        currency: "NGN",
        groupedDate: "3",
        totalDonation: 1981601.24,
      },
      {
        currency: "NGN",
        groupedDate: "4",
        totalDonation: 1764097.57,
      },
      {
        currency: "NGN",
        groupedDate: "5",
        totalDonation: 1977567.17,
      },
      {
        currency: "NGN",
        groupedDate: "6",
        totalDonation: 1972643.44,
      },
      {
        currency: "NGN",
        groupedDate: "7",
        totalDonation: 1957304.09,
      },
      {
        currency: "NGN",
        groupedDate: "8",
        totalDonation: 1184779.22,
      },
      {
        currency: "NGN",
        groupedDate: "9",
        totalDonation: 1859039.11,
      },
      {
        currency: "NGN",
        groupedDate: "10",
        totalDonation: 1882907.53,
      },
      {
        currency: "NGN",
        groupedDate: "11",
        totalDonation: 2307676.15,
      },
      {
        currency: "NGN",
        groupedDate: "12",
        totalDonation: 2101260.17,
      },
    ]);
  });

  it("tests total donations in April, 2024", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfMonth(2024, 3),
        getLastDayOfMonth(2024, 3)
      )
    ).toStrictEqual([
      {
        currency: "NGN",
        groupedDate: "14",
        totalDonation: 344001.57,
      },
      {
        currency: "NGN",
        groupedDate: "15",
        totalDonation: 528424.21,
      },
      {
        currency: "NGN",
        groupedDate: "16",
        totalDonation: 496550.52,
      },
      {
        currency: "NGN",
        groupedDate: "17",
        totalDonation: 378252.2,
      },
      {
        currency: "NGN",
        groupedDate: "18",
        totalDonation: 76307.41,
      },
    ]);
  });

  it("tests total donations in the 1st week of January, 2024", async () => {
    expect(
      await getTotalDonationsByDate(
        getFirstDayOfMonth(2024, 0),
        new Date("2024-01-07")
      )
    ).toStrictEqual([
      {
        currency: "NGN",

        groupedDate: "1",
        totalDonation: 81200.45,
      },
      {
        currency: "NGN",

        groupedDate: "2",
        totalDonation: 86606.12,
      },
      {
        currency: "NGN",

        groupedDate: "3",
        totalDonation: 6117.63,
      },
      {
        currency: "NGN",

        groupedDate: "4",
        totalDonation: 110191.25,
      },
      {
        currency: "NGN",
        groupedDate: "5",
        totalDonation: 50619.73,
      },
    ]);
  });
  it("tests all donations in the 1st week of January", async () => {
    expect(
      await getDonationsByDate(
        getFirstDayOfMonth(2024, 0),
        new Date("2024-01-07")
      )
    ).toStrictEqual([
      {
        amount: 50619.73,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-05T06:44:08.401Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "General Donation",
        id: "a27089cb-0db1-4d20-8a57-17a2c1d93a98",
      },
      {
        amount: 43985.17,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-04T23:12:03.328Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Ashura Feeding",
        id: "90e3fd67-dea0-4708-af16-13a9f68d7eee",
      },
      {
        amount: 66206.08,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-04T16:50:23.731Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Ashura Feeding",
        id: "c4f6bcfd-402a-4e6e-8c52-f7e932927e92",
      },
      {
        amount: 6117.63,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-03T10:22:36.562Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "General Donation",
        id: "9a945936-cf78-49d8-abf1-bd089b1164b8",
      },
      {
        amount: 86606.12,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-02T10:31:50.620Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Ramadan Feeding",
        id: "3056082b-7a2d-4468-8686-ae4af4f06bff",
      },
      {
        amount: 38028.96,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-01T14:16:08.995Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "Masjid Renovation",
        id: "51ab67f0-7e3e-4957-991d-978e72137d03",
      },
      {
        amount: 43171.49,
        changed_at: null,
        changed_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        created_at: new Date("2024-01-01T00:10:33.573Z"),
        currency: "NGN",
        donated_by: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        donation_type: "General Donation",
        id: "f5dde274-a69f-445c-ac80-161bcfc2f5cf",
      },
    ]);
  });
});
