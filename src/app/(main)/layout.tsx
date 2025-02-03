import { NavbarWithMenu } from "@/components/ui/navigation/nav-bar";
import { menuItems } from "@/lib/data/home-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagle Ummah Foundation",
  description: "This is the homepage for eagle ummah foundation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarWithMenu
      logosrc="/euf-logo.svg"
      menuitems={menuItems}
      className="w-full">
      {children}
    </NavbarWithMenu>
  );
}
