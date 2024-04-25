"use server"

import { VercelInviteUserEmail } from "../../react-email-starter/emails/vercel-invite-user"

type parmasType = {
    identifier?: string;
    url?: string;
    expires?: Date;
    provider?: any;
    token?: string;
    theme?: any;
    request?: Request;
}

export default async function sendVerification(from: string, to: string, url:string ) {
  const data = await fetch("http://localhost:3000/api/send", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
        from: from,
        to: to,
        url: url,
    })
  })
}