"use server";

import { getTotalDonations, getTotalExpenses } from "@/db/queries/finance";

type apiResponseType = {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
};

const getOverviewTotals = async () => {
  const totalDonationsAllCurrencies = await getTotalDonations();
  let totalDonations = 0;

  for (const donation of totalDonationsAllCurrencies) {
    if (donation.currency === "NGN") {
      totalDonations = totalDonations + donation.totalDonations;
    } else {
      const convertedCurrencyAmount = await getConvertedCurrencyAmount(
        donation.currency ?? "NGN",
        donation.totalDonations
      );
      totalDonations =
        totalDonations + (convertedCurrencyAmount?.conversion_result ?? 0);
    }
  }

  const totalExpensesArray = await getTotalExpenses();
  const totalExpenses = totalExpensesArray[0].totalExpenses;

  const totalBalance = totalDonations - totalExpenses;

  return {
    totalBalance: Math.round((totalBalance + Number.EPSILON) * 100) / 100, // round to two decimal places with precision
    totalDonations: totalDonations,
    totalExpenses: totalExpenses,
  };
};

const getConvertedCurrencyAmount = async (
  currency: string,
  amount: number
): Promise<apiResponseType | undefined> => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_CONVERTER_KEY}/pair/${currency}/NGN/${amount}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export { getOverviewTotals, getConvertedCurrencyAmount };
