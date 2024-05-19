import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import Dashboard from "@/components/ui/dashboard/dashboard";

export default async function Profile() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Dashboard />
    </SessionProvider>
  );
}
