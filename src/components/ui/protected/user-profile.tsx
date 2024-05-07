import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { H3 } from "../typography";
import { auth, signOut } from "../../../auth";

export const UserProfile = async () => {
  const color = faker.internet.color();
  const session = await auth();
  const name = session?.user?.name ?? "";
  const email = session?.user?.email ?? "";
  return (
    <div>
      <div
        className="flex justify-center gap-8 items-center w-20 h-20 text-slate-200 rounded-full my-40 mx-auto"
        style={{ background: color }}>
        <H3>
          {name?.split(" ")[0]?.charAt(0) + name?.split(" ")[1]?.charAt(0)}
        </H3>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}>
        <button
          type="submit"
          className="w-40 rounded-2xl h-9 text-white bg-primary p-2">
          Sign out
        </button>
      </form>
    </div>
  );
};
