import {
  getConvertedCurrencyAmount,
  getOverviewTotals,
} from "@/actions/dashboard/totals";
import { describe, it, expect, beforeAll, beforeEach, afterAll } from "vitest";
import { server } from "./mswServer";

describe.skip("test dashboard actions", () => {
  // beforeAll(() => server.listen({onUnhandledRequest: "error"}))
  // beforeEach(() => server.resetHandlers())
  // afterAll(() => server.close())

  it("tests currency covertsion from USD to NGN", async () => {
    expect(
      await getConvertedCurrencyAmount("USD", 1).then(
        (data) => data?.conversion_result
      )
    ).toEqual(1465.2662);
  });

  it("tests get overview totals", async () => {
    expect(await getOverviewTotals()).toStrictEqual({
      totalBalance: 8368867.36,
      totalDonations: 49224031.91,
      totalExpenses: 40855164.55,
    });
  });
});
