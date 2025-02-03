import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LoadingUi } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { P, Small } from "@/components/ui/typography";
import Image from "next/image";

export function LoadingAuthForm() {
  return (
    <Card className="mx-auto my-auto p-2 space-y-2 w-96">
      <CardHeader className="flex flex-row gap-2 justify-start items-end">
        <Image
          src="/euf-logo.svg"
          alt="logo"
          width={64}
          height={64}
          className="-ml-2"
        />
        <P>Eagle Ummah Foundation</P>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col gap-6">
          <div className="space-y-0">
            <LoadingUi variant="titleText" />
          </div>
          <div className="flex flex-row gap-8 justify-evenly items-center">
            <LoadingUi className="rounded-full w-16 h-16" />
            <LoadingUi className="rounded-full w-16 h-16" />
            <LoadingUi className="rounded-full w-16 h-16" />
          </div>
        </div>
        <div className="flex w-full h-20 items-center justify-between">
          <Separator className="h-[1px] w-1/4 bg-border" />
          <Small>or continue with</Small>
          <Separator className="h-[1px] w-1/4 bg-border" />
        </div>
        <div className="space-y-3">
          <div className="space-y-2.5">
            <LoadingUi variant="shortText" className="w-14 md:w-14 xl:w-14" />
            <LoadingUi className="h-9" />
          </div>
          <div className="space-y-2.5">
            <LoadingUi variant="shortText" className="w-20 md:w-20 xl:w-20" />
            <LoadingUi className="h-9" />
          </div>
        </div>
        <LoadingUi className="h-9 rounded-full mt-1" />
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        <LoadingUi variant="shortText" />
      </CardFooter>
    </Card>
  );
}
