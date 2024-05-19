import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";
import Credentials from "next-auth/providers/credentials";
import Resend from "next-auth/providers/resend";
import { encode, decode } from "next-auth/jwt";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "./db/drizzle";

import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/db/queries/user";
import { existingUserSchema } from "@/db/schema";

import sendVerification from "@/actions/send-verification";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/signin",
    newUser: "/signup",
    verifyRequest: "/verify",
  },
  providers: [
    Google,
    GitHub,
    Facebook,
    Twitter,
    Resend({
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier: email, url, provider: { from } }) {
        sendVerification(from, email, url);
      },
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        const userData = existingUserSchema.safeParse(credentials);
        if (userData.success) {
          const { email, password } = userData.data;
          user = await getUserByEmail(email);
          if (!user || !user?.password) return null;
          const isPasswordMatch = await bcrypt.compare(
            password!,
            user.password
          );
          if (isPasswordMatch) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      if (user?.email) {
        const userData = await getUserByEmail(user.email);
        if (userData?.emailVerified) return true;
        return false;
      }

      return true;
    },
    authorized({ auth, request }) {
      console.log("request: ", request, "auth: ", auth);
      //   const { pathname } = request.nextUrl;
      //   // if (pathname === "/middleware-example") return !!auth
      return true;
    },
  },
  session: { strategy: "jwt" },
  jwt: { encode, decode },
});
