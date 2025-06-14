"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Quote } from "../typography";
import {
  monthlyPlans,
  yearlyPlans,
  onetimePlans,
  PricingCardProps,
} from "@/lib/data/home-data";
import Link from "next/link";

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
);

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-fit mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2 rounded-full">
      <TabsTrigger value="0" className="text-base rounded-full">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base rounded-full">
        Yearly
      </TabsTrigger>
      <TabsTrigger value="2" className="text-base rounded-full">
        One-Time
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  title,
  price,
  description,
  features,
  actionLabel,
  popular,
  isYearly,
  isMonthly,
}: PricingCardProps) => (
  <Card
    className={`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`}>
    <div>
      <CardHeader className="pb-8 pt-4">
        {popular ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
              {title}
            </CardTitle>
            <div
              className={cn(
                "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                {
                  "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                    popular,
                }
              )}>
              Popular
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {price === "Custom"
              ? "custom"
              : `₦${price?.toLocaleString("en-US")}`}
          </h3>
          <span className="flex flex-col justify-end text-sm mb-1">
            {isYearly ? "/year" : isMonthly ? "/month" : null}
          </span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative flex flex-col gap-2">
        <Button asChild className="">
          <Link href="https://helpa-v1-prod.vercel.app/ngos/x0DvHJ ">
            {actionLabel}
          </Link>
        </Button>
      </CardContent>
    </div>
    <CardFooter className="flex flex-col gap-2 justify-start items-start grow mt-2">
      {features.map((feature: string) => (
        <CheckItem key={feature} text={feature} />
      ))}
    </CardFooter>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircledIcon className="my-auto text-green-400 w-5 h-5" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

type optionsType = "monthly" | "yearly" | "one-time";

export function DonateOptions() {
  const [options, setOptions] = useState<optionsType>("monthly");
  const togglePricingPeriod = (value: string) =>
    setOptions(
      parseInt(value) === 0
        ? "monthly"
        : parseInt(value) === 1
          ? "yearly"
          : "one-time"
    );

  return (
    <div className="px-8 flex flex-col items-center justify-center w-full space-y-10">
      <PricingHeader
        title="Support Our Causes"
        subtitle="Choose a donation plan that's right for you"
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {options === "monthly" &&
          monthlyPlans.map((plan) => {
            return <PricingCard key={plan.title} {...plan} />;
          })}
        {options === "yearly" &&
          yearlyPlans.map((plan) => {
            return <PricingCard key={plan.title} {...plan} />;
          })}
        {options === "one-time" &&
          onetimePlans.map((plan) => {
            return <PricingCard key={plan.title} {...plan} />;
          })}
      </section>
      <br className="my-8" />
      <Quote className="w-11/12 md:w-4/5 lg:w-3/5 border-accent mx-auto mt-8">
        "Those who spend their wealth [in Allah's way] by night and by day,
        secretly and publicly - they will have their reward with their Lord. And
        no fear will there be concerning them, nor will they grieve."
      </Quote>
    </div>
  );
}
