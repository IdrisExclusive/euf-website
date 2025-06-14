"use client";

import { motion } from "framer-motion";
import { H2, P, Quote, Small } from "../typography";
import { Card, CardContent, CardHeader } from "../card";
import Image from "next/image";
import { QuoteIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Reviews = () => {
  const [widthDiff, setWidthDiff] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const calculateWidthDiff = () => {
    if (window.innerWidth < 1800) {
      setWidthDiff(
        window.innerWidth > 940
          ? 1800 - window.innerWidth
          : 2000 - window.innerWidth
      );
      setIsMobile(window.innerWidth < 940);
    }
  };

  useEffect(() => {
    calculateWidthDiff();
    window.addEventListener("resize", calculateWidthDiff);
    return window.removeEventListener("resize", calculateWidthDiff);
  }, [widthDiff]);

  return (
    <div className="px-8 mx-auto flex flex-col gap-8 lg:gap-16 justify-center w-screen text-center items-center overflow-hidden">
      <H2 className="border-none">What Our Donors Say About Us</H2>
      <motion.div
        whileInView={{ x: [-widthDiff / 2, widthDiff / 2] }}
        transition={{
          delay: 0.2,
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: -800, right: 800 }}
        className="p-1 grid grid-cols-7 md:grid-cols-6 md:grid-rows-2 grid-flow-row w-[2000px] md:w-[1800px] gap-2 md:gap-4 lg:gap-8">
        <ReviewCard
          image="/reviews/Umar.jpg"
          name="Umar Abdullah"
          profession="Business Owner"
          comment="I'm continually impressed by the innovation and effectiveness of your programs. 
                    Thank you for continuously striving to improve and adapt to better serve those you support."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-1"
        />
        <ReviewCard
          image="/reviews/Khadija.jpg"
          name="Khadijah Basma"
          profession="Teacher"
          comment="Your transparency and commitment to accountability are commendable. 
                    I trust that my donation is making a real impact where it's needed most."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-1"
        />
        <ReviewCard
          image="/reviews/Zaid.png"
          name="Zaid Ahmad"
          profession="Software Engineer"
          comment="It's heartening to see the tangible results of your efforts. 
                    Your dedication to serving others is a testament to the power of compassion and generosity."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-2"
        />
        <ReviewCard
          image="/reviews/Aisha.jpg"
          name="Aisha Sadiq"
          profession="Nurse"
          comment="The impact of your organization extends far beyond the numbers. 
                    You're not just providing assistance; 
                    you're restoring dignity and empowering individuals to thrive"
          isLarge={true}
          className="md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2 "
        />
        <ReviewCard
          image="/reviews/Zainab.jpg"
          name="Zainab Hassan"
          profession="Marketing Manager"
          comment="Thank you for providing a beacon of hope to those in need. 
                    Your dedication to making a difference is truly inspiring."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-5 md:row-start-1"
        />
        <ReviewCard
          image="/reviews/Ibrahim.webp"
          name="Ibrahim Yasir"
          profession="Financial Analyst"
          comment="I am grateful to be a part of such a meaningful cause. 
                    Keep up the incredible work in transforming lives and communities."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-5 md:row-start-2"
        />
        <ReviewCard
          image="/reviews/Hafsah.jpg"
          name="Hafsah Mohammed"
          profession="Human Resources Manager"
          comment="Your work embodies the true spirit of charity and selflessness. 
                    Thank you for being a beacon of light in a world that can often feel dark and uncertain."
          isLarge={isMobile}
          className="md:col-span-1 md:row-span-1 md:col-start-6 md:row-start-1"
        />
      </motion.div>
    </div>
  );
};

interface reviewProps {
  image: string;
  name: string;
  profession: string;
  comment: string;
  isLarge: boolean;
  className?: string;
}

const ReviewCard = ({
  image,
  name,
  profession,
  comment,
  isLarge,
  className,
}: reviewProps) => (
  <Card
    className={cn(
      "my-auto flex flex-col border-zinc-100 dark:border-zinc-800",
      className
    )}>
    <CardHeader
      className={cn(
        "flex-row items-center pb-0",
        isLarge
          ? "space-x-4 md:space-x-8 p-6"
          : "space-x-2 md:space-x-4 p-2 md:p-4"
      )}>
      <Image
        src={image}
        alt=""
        width={isLarge ? 64 : 32}
        height={isLarge ? 64 : 32}
        className="rounded-full w-auto h-auto"
      />
      <div className="flex flex-col items-start justify-center">
        <P
          className={cn(
            "text-start",
            isLarge ? "text-lg md:text-xl" : "text-xs md:text-sm"
          )}>
          {name}
        </P>
        <Small
          className={cn(
            "text-muted-foreground text-start",
            isLarge ? "text-sm md:text-base" : "text-xs"
          )}>
          {profession}
        </Small>
      </div>
    </CardHeader>
    <CardContent
      className={cn(
        isLarge ? "p-3 md:p-8" : "p-1 md:p-2",
        "pt-0 relative text-pretty"
      )}>
      <QuoteIcon
        className={cn(
          "z-0 absolute left-2 top-2 rotate-180 text-zinc-500/25",
          isLarge
            ? "w-8 md:w-16 h-8 md:h-16 top-2  md:top-4"
            : "w-3 md:w-6 h-3 md:h-6 top-0"
        )}
      />
      <Quote
        className={cn(
          "z-10 border-l-0 pl-0 mt-0 text-pretty",
          isLarge
            ? "text-base md:text-lg lg:text-xl py-5 md:py-10 indent-4 md:indent-8"
            : "text-xs md:text-sm p-2 indent-4"
        )}>
        {comment}
      </Quote>
      <QuoteIcon
        className={cn(
          "absolute right-2 bottom-2 text-zinc-500/25",
          isLarge
            ? "w-8 md:w-16 h-8 md:h-16 bottom-2 md:bottom-4"
            : "w-3 md:w-6 h-3 md:h-6 bottom-1 md:bottom-2"
        )}
      />
    </CardContent>
  </Card>
);
