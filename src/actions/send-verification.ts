"use server"

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
  await fetch("http://localhost:3000/api/send", {
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