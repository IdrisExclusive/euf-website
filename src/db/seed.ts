import { donations, expenses } from "./schema";
import { getUserByEmail } from "./queries/user";
import { db } from "./drizzle";
import { getRandomAmount } from "@/lib/helpers/getRandomAmount";
import { faker } from "@faker-js/faker";
import { generateRandomExpenseType } from "@/lib/helpers/generateRandomExpenseType";
import { generateRandomDonationType } from "@/lib/helpers/generateRandomDonationType ";

const main = async () => {
  const donationsData: (typeof donations.$inferInsert)[] = [];
  const expensesData: (typeof expenses.$inferInsert)[] = [];

  const user = await getUserByEmail("ahmad.idris10ia@gmail.com");

  const donationsCnt = 1000;

  for (let i = 0; i < donationsCnt; i++) {
    donationsData.push({
      donated_by: user?.id,
      donation_type: generateRandomDonationType(),
      currency: "NGN",
      amount: Math.round((getRandomAmount() + Number.EPSILON) * 100) / 100, // round to two decimal places with precision
      created_at: faker.date.between({
        from: "2022-01-01T00:00:00.000Z",
        to: "2024-05-12T00:00:00.000Z",
      }),
    });
  }

  const expensesCnt = 100;

  for (let i = 0; i < expensesCnt; i++) {
    const expenseType = generateRandomExpenseType();
    let amount: number;

    switch (expenseType) {
      case "Borehole Project":
        amount = getRandomAmount(1000000, 2000000);
        break;
      case "Well Project":
        amount = getRandomAmount(100000, 500000);
        break;
      case "Ramadan Feeding":
        amount = getRandomAmount(100000, 1500000);
        break;
      case "Ashura Feeding":
        amount = getRandomAmount(20000, 200000);
        break;
      case "Muharram Feeding":
        amount = getRandomAmount(20000, 200000);
        break;
      case "Masjid Renovation":
        amount = getRandomAmount(50000, 500000);
        break;
      default:
        amount = getRandomAmount(5, 1000);
    }

    expensesData.push({
      expense_type: expenseType,
      currency: "NGN",
      amount: Math.round((amount + Number.EPSILON) * 100) / 100, // round to two decimal places with precision
      created_at: faker.date.between({
        from: "2022-01-01T00:00:00.000Z",
        to: "2024-05-12T00:00:00.000Z",
      }),
    });
  }

  console.log("Seed start");
  await db.insert(donations).values(donationsData);
  await db.insert(expenses).values(expensesData);
  console.log("Seed done");
};

main();
