"use server";

import db from "@/db/drizzle";
import { emailSchema, newsletterEmails } from "@/db/schema";
import { eq } from "drizzle-orm";
import { type emailState } from "@/lib/type";
import { revalidatePath } from "next/cache";

export const saveEmail = async (prevState: emailState, formData: FormData) => {
  const validatedFields = emailSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check email field",
      submitted: false,
    };
  }

  const { email } = validatedFields.data;

  const existingEmail = await db.select({ email: newsletterEmails.email }).from(newsletterEmails).where(eq(newsletterEmails.email, email)).limit(1);

  if (existingEmail.length === 0) {
    try {
      await db.insert(newsletterEmails).values({ email: email });
      revalidatePath("/")
      return { message: "sign up successful", submitted: true };
    } catch {
      return {
        message: "unable to add email, please try again",
        submitted: false,
      };
    }
  } else {
    return { message: "email already exists", submitted: false };
  }
};
