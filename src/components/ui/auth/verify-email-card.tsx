"use client";

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
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useTimer } from "react-timer-hook";

export const VerifyEmailCard = () => {
  const [showResend, setShowResend] = useState(false);

  const callbackUrl = useSearchParams().get("callbackUrl");
  const resendVerificationWithEmail = resendVerification.bind(
    null,
    undefined,
    callbackUrl
  );

  const expiry = new Date(Date.now() + 1000 * 60);
  const { seconds, minutes } = useTimer({
    autoStart: true,
    expiryTimestamp: expiry,
    onExpire: () => {
      setShowResend(true);
    },
  });

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
          <H2 className="text-center border-none text-xl md:text3xl">
            Check your email
          </H2>
          <P className="text-sm md:text-base text-pretty text-center">
            We sent a magic link to your email. Click on it to complete your
            sign up
          </P>
        </CardContent>
        <CardFooter className="flex flex-col">
          {!showResend && (
            <Muted>{`${minutes}:${String(seconds).padStart(2, "0")}`}</Muted>
          )}
          {showResend && (
            <form action={resendVerificationWithEmail}>
              <ResendButton />
            </form>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

// This implementation uses for react useFormStatus to disable the button when submitting
const ResendButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && (
        <div className="flex justify-center items-center">
          <Muted className="text-xs md:text-sm">Didn't receive an email?</Muted>
          <Button
            type="submit"
            variant={"link"}
            // disabled={pending}
            className="text-xs md:text-sm shadow-none hover:no-underline text-secondary hover:text-secondary/80 p-2">
            resend
          </Button>
        </div>
      )}
      {pending && (
        <FormStatusMessage
          type="progress"
          message="Sending verification email"
        />
      )}
    </>
  );
};
