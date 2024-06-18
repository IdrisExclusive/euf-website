"use server";

import { signOut } from "../../auth";

export const logout = async () => {
  console.log("I was clicked");
  await signOut();
};
