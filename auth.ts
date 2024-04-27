import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";
import Credentials from "next-auth/providers/credentials";
import Resend from "next-auth/providers/resend";

import * as next from "next-auth/webauthn";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/db/drizzle";

import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/db/queries/user";
import { existingUserSchema } from "@/db/schema";

import sendVerification from "@/actions/send-verification";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
    verifyRequest: "/verify-email",
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
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const userData = existingUserSchema.safeParse(credentials);
        if (userData.success) {
          const { email, password } = userData.data;
          user = await getUserByEmail(email);
          if (user?.email) {
            const isPasswordMatch = await bcrypt.compare(
              password!,
              user.password
            );
            if (isPasswordMatch) {
              return user;
            }
          }
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
    authorized({ request, auth }) {
      console.log("request: ", request, "auth: ", auth);
      const { pathname } = request.nextUrl;
      // if (pathname === "/middleware-example") return !!auth
      return true;
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});
