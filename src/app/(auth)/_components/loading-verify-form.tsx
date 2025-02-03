import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LoadingUi } from "@/components/ui/loading";
import { H2, P, Muted } from "@/components/ui/typography";
import Image from "next/image";

export function LoadingVerifyForm() {
  return (
    <div className="flex w-full h-screen">
      <Card className="mx-auto my-auto w-80 md:w-96 flex flex-col justify-center items-center ">
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
          <LoadingUi className="w-10 h-4" />
        </CardFooter>
      </Card>
    </div>
  );
}
