import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handler = [
  http.get(
    `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_CONVERTER_KEY}/pair/USD/NGN/1`,
    () => {
      return HttpResponse.json(1440);
    }
  ),
];

export const server = setupServer(...handler);
