"use server"

import { accounts, existingUserSchema } from "@/db/schema"
import { z } from "zod"
import { type existingUserState } from "@/lib/type"
import { auth, signIn } from "../../auth"
import db from "@/db/drizzle"

export const credentialLogin = async (data: z.infer<typeof existingUserSchema>): Promise<existingUserState> => {
    const validUser = existingUserSchema.safeParse(data)

    if(!validUser.success) {
        return {
            errors: validUser.error.flatten().fieldErrors,
            message: "Please check your input and try again",
            error: true
        }
    }

    const {email, password} = validUser.data

    try{
        await signIn(
            "credentials", {
                email: email,
                pasword: password,
                callbackUrl: "/"
            }
        )
        const account = await db.select().from(accounts)
        const userId = account[0].userId
    } catch (error) {
        return {}
    }

    return {
        error: false
    }
}

export const oAuthLogin = async (provider: string) => {
    const session = await auth()
    console.log(session)
    await signIn(provider, {
        redirectTo: "/"
    })
    return {}
}