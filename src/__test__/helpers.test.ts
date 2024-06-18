import { expenseTypes } from "@/lib/data/enums";
import {
  firstDayOfCurrentMonth,
  firstDayOfCurrentYear,
  lastDayOfCurrentYear,
  getFirstDayOfYear,
  getLastDayOfYear,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getDateGroup,
} from "@/lib/helpers/dateHelpers";
import { generateRandomExpenseType } from "@/lib/helpers/generateRandomExpenseType";
import { getDivisionCount } from "@/lib/helpers/getDivisionCount";
import { getRandomAmount } from "@/lib/helpers/getRandomAmount";
import { describe, it, expect, test } from "vitest";

describe("test random amounts helper", () => {
  const minAmount = 1000;
  const maxAmount = 100000;

  const randomAmount = getRandomAmount(minAmount, maxAmount);

  it("tests amount between 5000 and 1000", () => {
    expect(randomAmount).toBeGreaterThanOrEqual(minAmount);
    expect(randomAmount).toBeLessThanOrEqual(maxAmount);
  });
});

describe("test division count helper", () => {
  it("test division count for 10000 by 5000", () => {
    expect(getDivisionCount(10000, 5000)).toEqual(2);
  });
  it("test division count for 10000 by 1000", () => {
    expect(getDivisionCount(10000, 1000)).toEqual(2);
  });
  it("test division count for 500000 by 5000", () => {
    expect(getDivisionCount(500000, 5000)).toEqual(2);
  });
  it("test division count for 5000000 by 1000", () => {
    expect(getDivisionCount(5000000, 1000)).toEqual(3);
  });
  it("test division count for 10000 by 500", () => {
    expect(getDivisionCount(10000, 100)).toEqual(2);
  });
  it("test division count for 5000000 by 500", () => {
    expect(getDivisionCount(5000000, 100)).toEqual(4);
  });
});

describe("test genration of random expense types", () => {
  it("tests if it generates correct expense types", () => {
    for (let i = 0; i < 10; i++) {
      expect(expenseTypes).toContain(generateRandomExpenseType());
    }
  });

  it("tests the proportion of expense types generated", () => {
    const randomExpenses = Array.from({ length: 100 }, () =>
      generateRandomExpenseType()
    );

    const boreholeProjectCount = randomExpenses.filter(
      (expense) => expense === "Borehole Project"
    ).length;
    const wellProjectCount = randomExpenses.filter(
      (expense) => expense === "Well Project"
    ).length;
    const ramadanFeedingCount = randomExpenses.filter(
      (expense) => expense === "Ramadan Feeding"
    ).length;
    const ashuraFeedingCount = randomExpenses.filter(
      (expense) => expense === "Ashura Feeding"
    ).length;
    const muharramFeedingCount = randomExpenses.filter(
      (expense) => expense === "Muharram Feeding"
    ).length;
    const masjidRenovationCount = randomExpenses.filter(
      (expense) => expense === "Masjid Renovation"
    ).length;
    const bankChargesCount = randomExpenses.filter(
      (expense) => expense === "Bank Charges"
    ).length;

    expect(bankChargesCount).toBeGreaterThan(ramadanFeedingCount);
    expect(ramadanFeedingCount).toBeGreaterThan(boreholeProjectCount);
    expect(boreholeProjectCount).toBeGreaterThan(ashuraFeedingCount);
    // expect(ashuraFeedingCount).toBeGreaterThanOrEqual(muharramFeedingCount);
    expect(muharramFeedingCount).toBeGreaterThan(masjidRenovationCount);
    expect(masjidRenovationCount).toBeGreaterThanOrEqual(wellProjectCount);
  });
});

describe("test date helpers", () => {
  const firstDayof2024 = new Date("2024-01-01");
  const firstDayOfMay2024 = new Date("2024-05-01");
  const lastDayOf2024 = new Date("2024-12-31T23:59:59.999Z");
  const lastDayOfMay2024 = new Date("2024-05-31T23:59:59.999Z");
  const firstDayof2020 = new Date("2020-01-01");
  const firstDayOfMay2020 = new Date("2020-05-01");
  const lastDayOf2020 = new Date("2020-12-31T23:59:59.999Z");
  const lastDayOfMay2020 = new Date("2020-05-31T23:59:59.999Z");

  // test("first day of current year", () =>
  //   expect(firstDayOfCurrentYear).toStrictEqual(firstDayof2024));

  // test("last day of current year", () =>
  //   expect(lastDayOfCurrentYear).toStrictEqual(lastDayOf2024));

  // test("first day of current month", () =>
  //   expect(firstDayOfCurrentMonth).toStrictEqual(firstDayOfMay2024));

  test("first day of 2020", () =>
    expect(getFirstDayOfYear(2020)).toStrictEqual(firstDayof2020));

  test("last day of 2020", () =>
    expect(getLastDayOfYear(2020)).toStrictEqual(lastDayOf2020));

  test("first day of May 2020", () =>
    expect(getFirstDayOfMonth(2020, 4)).toStrictEqual(firstDayOfMay2020));
  test("last day of May 2020", () =>
    expect(getLastDayOfMonth(2020, 4)).toStrictEqual(lastDayOfMay2020));

  it("tests date groups", () => {
    expect(getDateGroup(firstDayof2020, lastDayOf2024)).toMatch("YEAR");
    expect(getDateGroup(firstDayof2024, lastDayOf2024)).toMatch("MONTH");
    expect(
      getDateGroup(getFirstDayOfMonth(2024, 1), getLastDayOfMonth(2024, 1))
    ).toMatch("WEEK");
    expect(getDateGroup(firstDayOfMay2024, new Date(2024, 4, 7))).toMatch(
      "DAY"
    );
  });
});
