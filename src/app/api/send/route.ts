import { Resend } from "resend"
import { VercelInviteUserEmail } from "../../../../react-email-starter/emails/vercel-invite-user"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.AUTH_RESEND_KEY)

export async function POST(req: NextRequest) {
    const {from, to, url} = await req.json()
    const {host} = new URL(url)
    try {
        // const data = await resend.emails.send({
        //     from: from,
        //     to: to,
        //     subject: `Sign in to ${host}`,
        //     react: VercelInviteUserEmail({url, host})
        // })
        // return Response.json(data)
         return Response.json("")
    } catch (error) {
        return Response.json({error})
    }
}