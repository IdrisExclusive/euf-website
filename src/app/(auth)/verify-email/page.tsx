"use client"

import { resendVerification } from "@/actions/sign-up";
import { FormStatusMessage } from "@/components/ui/auth/form-message";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { H2, Muted, P } from "@/components/ui/typography";
import Image from "next/image";
import { useState } from "react";

export default function VerifyEmail() {
    const [status, setStatus] = useState(false)
  return (
    <div className="flex w-full h-screen mx-auto ">
      <Card className="my-auto w-80 md:w-96 flex flex-col justify-center items-center ">
        <CardHeader className="py-0">
          <Image
            src="/socials/email.png"
            alt="email"
            width={250}
            height={250}
            className="w-40 h-40 md:w-60 md:h-w-60 object-cover"
          />
        </CardHeader>
        <CardContent className="pt-0 space-y-1">
          <H2 className="text-center border-none text-xl md:text3xl">Check your email</H2>
          <P className="text-sm md:text-base text-pretty text-center">
            We sent a magic link to your email. Click on it to complete your
            sign up
          </P>
        </CardContent>
        <CardFooter>
          <Muted className="text-xs md:text-sm">Didn't receive an email?</Muted>
          <form action={resendVerification}>
            <Button 
                type="submit" 
                variant={"link"} 
                onClick={() => setStatus(true)}
                className="text-xs md:text-sm shadow-none hover:no-underline text-secondary hover:text-secondary/80 p-2">
              resend
            </Button>
          </form>
          {status && <FormStatusMessage message="Verification email sent" />}
          +-
        </CardFooter>
      </Card>
    </div>
  );
}
