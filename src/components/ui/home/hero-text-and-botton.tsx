"use client";

import { H1, P } from "../typography";
import { Button } from "../button";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";
import { AnimatedText } from "../animated-text";
import Link from "next/link";

export const HeroTexts = ({ className }: { className?: String }) => (
  <div
    className={cn(
      "flex flex-col w-fit h-fit dark:text-slate-200 text-zinc-50 text-pretty text-center",
      className
    )}>
    <H1 className="text-4xl md:5xl lg:text-6xl h-fit p-2 bg-gradient-to-br dark:from-slate-200/80 from-zinc-50 from-20% text-transparent bg-clip-text">
      <p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}>
          Empowering Communities, One Project
        </motion.span>
        <AnimatedText
          text={" at a Time!"}
          className="text-accent"
          delayFactor={0.15}
          delay={0.2}
        />
      </p>
    </H1>
    <P className="w-4/5 mx-auto text-xs xs:text-sm sm:text-base lg:text-xl">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.2 }}>
        Our organization is dedicated to financing projects that provide
        essential sustenance to communities in need.
      </motion.span>
    </P>
  </div>
);

export const HeroButtons = ({ className }: { className?: String }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1, duration: 0.2 }}
    className={cn(
      "flex flex-row justify-center space-x-12 sm:space-x-20 items-center",
      className
    )}>
    <Button
      asChild
      variant={"outline"}
      className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base border-slate-100 hover:text-slate-100">
      <Link href="/signup">Sign up</Link>
    </Button>
    <Button
      asChild
      variant={"cta"}
      size={"lg"}
      className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base bg-gradient-to-tr from-accent via-accent/65 to-accent/40 hover:bg-gradient-to-tr hover:from-accent/85 hover:via-accent/70 hover:to-accent/55 transition-all duration-500">
      <Link href="#">Donate Now</Link>
    </Button>
  </motion.div>
);
