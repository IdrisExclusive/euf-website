"use server";

import { existingUserSchema } from "@/db/schema";
import { z } from "zod";
import { type existingUserState } from "@/lib/type";
import { auth, signIn } from "../../auth";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/db/queries/user";
import { SIGNIN_REDIRECT } from "@/routes";

export const credentialLogin = async (
  data: z.infer<typeof existingUserSchema>,
  callbackUrl?: string | null
): Promise<existingUserState> => {
  const validUser = existingUserSchema.safeParse(data);

  if (!validUser.success) {
    return {
      errors: validUser.error.flatten().fieldErrors,
      message: "Please check your input and try again",
      error: true,
    };
  }

  const { email, password } = validUser.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      message: "Check your email and try again",
      error: true,
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || SIGNIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid password", error: true };
        case "AccessDenied":
          return { message: "Please verify your account", error: true };
        default:
          return { message: "Something went wrong!", error: true };
      }
    }
    throw error;
  }

  return {
    message: "Sign-in successful",
    error: false,
  };
};

export const oAuthLogin = async (
  provider: string,
  callbackUrl?: string | null
) => {
  await signIn(provider, {
    redirectTo: callbackUrl || SIGNIN_REDIRECT,
  });
  return {};
};

export const getSession = async () => {
  const session = await auth();
  return session;
};
