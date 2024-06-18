"use server";

export default async function sendVerification(
  from: string,
  to: string,
  url: string
) {
  await fetch("http://localhost:3000/api/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: from,
      to: to,
      url: url,
    }),
  });
}
