import { eq } from "drizzle-orm"
import db from "../drizzle"
import { newUserFrontEndSchema, newUserBackEndSchema, users } from "../schema"
import { z } from "zod"

export const getUserByEmail = async (email: string): Promise<z.infer<typeof newUserBackEndSchema>[] | null> => {
    try {
       return await db.select().from(users).where(eq(users.email, email))
    } catch (error) {
        return null
    }
}

export const createUser = async (data: z.infer<typeof newUserFrontEndSchema>) => {
    try {
        await db.insert(users).values({
            name: data.name,
            email: data.email,
            password: data.password,
            role: "MEMBER"
        })
    } catch (error) {
        return {message: "Error creating user"}
    }
}