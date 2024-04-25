"use server";

import { createUser, getUserByEmail } from "@/db/queries/user";
import { newUserFrontEndSchema } from "@/db/schema";
import { newUserState } from "@/lib/type";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { signIn, } from "../../auth";
import { cookies } from "next/headers";

export async function signUp(
  data: z.infer<typeof newUserFrontEndSchema>
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

  await signIn("resend", { email });
  
  return {
    message: "Your account creation was successful",
    error: false,
  };
}

export async function resendVerification() {
  const email = cookies().get("email")?.value
  await signIn("resend", { email })
}
