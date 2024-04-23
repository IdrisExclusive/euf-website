import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import Twitter from "next-auth/providers/twitter"
import Credentials from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import db from "@/db/drizzle"

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [Google, GitHub, Facebook, Twitter,
     Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        return null
      }
     })
    ],
    callbacks: {
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   if (pathname === "/middleware-example") return !!auth
    //   return true
    // },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
  }, 
  
})