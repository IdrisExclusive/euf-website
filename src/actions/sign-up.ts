"use server";

import { createUser, getUserByEmail } from "@/db/queries/user";
import { newUserFrontEndSchema } from "@/db/schema";
import { newUserState } from "@/lib/type";
import { z } from "zod";
import bcrypt from "bcryptjs";

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

  const existingUser = await getUserByEmail(email)
  
  console.log(existingUser);

  if (existingUser && existingUser.length > 0) {
    return {
      message: "User already exists",
      error: true,
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  validNewUser.data.password = hashedPassword;

  console.log(validNewUser.data);

  await createUser(validNewUser.data).then((data) => {
    if (data) {
      return {
        message: data?.message,
        error: true,
      };
    }
  });

  return {
    message: "Success: User Created",
    error: false,
  };
}
