import { Resend } from "resend"
import { VerifyEmailMessage } from "@/components/ui/auth/verify-email-msg"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.AUTH_RESEND_KEY)

export async function POST(req: NextRequest) {
    const {from, to, url} = await req.json()
    const {host} = new URL(url)
    try {
        const data = await resend.emails.send({
            from: from,
            to: to,
            subject: "Complete Your Sign-Up",
            react: VerifyEmailMessage({url, host})
        })
        return Response.json(data)
    } catch (error) {
        return Response.json({error})
    }
}