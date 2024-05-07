"use server";

import { createUser, getUserByEmail } from "@/db/queries/user";
import { newUserFrontEndSchema } from "@/db/schema";
import { newUserState } from "@/lib/type";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { signIn, } from "../auth";
import { cookies } from "next/headers";
import { SIGNIN_REDIRECT } from "@/routes";

export async function signUp(
  data: z.infer<typeof newUserFrontEndSchema>, callbackUrl?: string | null
): Promise<newUserState> {
  const validNewUser = newUserFrontEndSchema.safeParse(data);

  if (!validNewUser.success) {
    return {
      errors: validNewUser.error.flatten().fieldErrors,
      message: "Please check your input and try again",
      error: true,
    };
  }

  const { email, password } = validNewUser.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      message: "User already exists",
      error: true,
    };
  }

  const hashedPassword = await bcrypt.hash(password!, 10);
  validNewUser.data.password = hashedPassword;

  await createUser(validNewUser.data).then((error) => {
    if (error) {
      return {
        message: error?.message,
        error: true,
      };
    }
  });
  
  const expires = new Date(Date.now() + 1000 * 3600* 24) // expires after 1 day
  cookies().set("email", email, {httpOnly: true, expires})

  await signIn("resend", { email, redirectTo: callbackUrl || SIGNIN_REDIRECT });
  
  return {
    message: "Your account creation was successful",
    error: false,
  };
}

export async function resendVerification(email?: string, callbackUrl?: string | null) {
  if(!email) {email = cookies().get("email")?.value}
  await signIn("resend", { email, redirectTo: callbackUrl || SIGNIN_REDIRECT })
}
