"use client";

import { cn } from "@/lib/utils";
import { getDivisionCount } from "@/lib/helpers/getDivisionCount";
import { H2, Lead, Muted } from "../typography";
import { useRef } from "react";
import { useAnimatedNumber } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Separator } from "../separator";

export const Stats = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "px-4 flex flex-col w-full gap-16 mx-auto h-fit justify-center items-center",
      className
    )}>
    <div>
      <H2 className="text-center border-none text-foreground/90">
        Impacting Lives
      </H2>
      <Lead className="text-center">
        Our work has touched the lives of many. With your support, we can do
        more.
      </Lead>
    </div>
    <div className="bg-zinc-50 dark:bg-zinc-900 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-evenly w-2/3 md:w-fit md:min-w-4/5 lg:w-3/4 h-[576px] md:h-48 rounded-xl shadow-lg dark:shadow-xl shadow-zinc-300 dark:shadow-zinc-800 border border-zinc-700 dark:border-zinc-300">
      <Stat
        amount={10000000}
        title=""
        details="worth of projects delivered"
        showCurrency={true}
        showPlusSign={true}
      />
      <Separator className="bg-zinc-500 dark:bg-zinc-200 h-[1px] w-3/4 md:h-3/4 md:w-[1px]" />
      <Stat amount={3} title="Boreholes" details="drilled in two communities" />
      <Separator className="bg-zinc-500 dark:bg-zinc-200 h-[1px] w-3/4 md:h-3/4 md:w-[1px]" />
      <Stat
        amount={20000}
        title="Foods"
        details="provided to the poor"
        showPlusSign={true}
      />
    </div>
  </div>
);

type achievementProps = {
  amount: number;
  title?: string;
  details?: string;
  showCurrency?: boolean;
  showPlusSign?: boolean;
  className?: string;
};

const Stat = ({
  amount,
  title,
  details,
  showCurrency = false,
  showPlusSign = false,
  className,
}: achievementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const duration = getDivisionCount(amount, 100) * 1.5;
  const animatedAmount = useAnimatedNumber(amount, ref, duration);
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col w-64 h-fit text-secondary text-center p-4 md:p-8",
        className
      )}>
      <H2 className="mb-0 border-none">
        {showCurrency && "₦"}
        <motion.span>{animatedAmount}</motion.span>
        {showPlusSign && "+"} {title}
      </H2>
      <Muted className="mt-0">{details}</Muted>
    </div>
  );
};
