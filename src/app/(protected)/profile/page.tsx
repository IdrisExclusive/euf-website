import { H3 } from "@/components/ui/typography";
import { faker } from "@faker-js/faker";
import { getSession } from "@/actions/login";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import { UserProfile } from "@/components/ui/protected/user-profile";
import DashboardPage from "@/components/ui/dashboard/page";

export default async function Profile() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {/* <UserProfile /> */}
      <DashboardPage />
    </SessionProvider>
  );
}
