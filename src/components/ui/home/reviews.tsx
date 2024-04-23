"use client";

import { motion } from "framer-motion";
import { H2, P, Quote, Small } from "../typography";
import { Card, CardContent, CardHeader } from "../card";
import Image from "next/image";
import { QuoteIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Reviews = () => {
  const [widthDiff, setWidthDiff] = useState<number>(0);

  const calculateWidthDiff = () => {
    if (window.innerWidth < 1800) {
      setWidthDiff(
        window.innerWidth > 768
          ? 1900 - window.innerWidth
          : window.innerWidth > 768
          ? 1200 - window.innerWidth
          : 800 - window.innerWidth
      );
    }
  };

  useEffect(() => {
    calculateWidthDiff();
    window.addEventListener("resize", calculateWidthDiff);
    return window.removeEventListener("resize", calculateWidthDiff);
  }, [widthDiff]);

  return (
    <div className="flex flex-col gap-16 justify-center w-screen h-fit items-center overflow-hidden">
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
        dragConstraints={{ top: 0, bottom: 0, left: -250, right: 250 }}
        className="grid grid-cols-4 grid-rows-4 md:grid-cols-6 md:grid-rows-2 grid-flow-row w-[800px] sm:w-[1200px] md:w-[1800px] h-fit gap-4 md:gap-8">
        <ReviewCard
          image="/reviews/Umar.jpg"
          name="Umar Abdullah"
          profession="Business Owner"
          comment="I'm continually impressed by the innovation and effectiveness of your programs. 
                    Thank you for continuously striving to improve and adapt to better serve those you support."
          isLarge={false}
          className="col-start-1 row-start-2 md:row-start-1 col-span-1 row-span-1"
        />
        <ReviewCard
          image="/reviews/Khadijah.avif"
          name="Khadijah Basma"
          profession="Teacher"
          comment="Your transparency and commitment to accountability are commendable. 
                    I trust that my donation is making a real impact where it's needed most."
          isLarge={false}
          className="col-start-2 row-start-1 col-span-1 row-span-1 rounded-xl"
        />
        <ReviewCard
          image="/reviews/Zaid.png"
          name="Zaid Ahmad"
          profession="Software Engineer"
          comment="It's heartening to see the tangible results of your efforts. 
                    Your dedication to serving others is a testament to the power of compassion and generosity."
          isLarge={false}
          className="col-start-2 row-start-4 md:row-start-2 col-span-1 row-span-1 rounded-xl"
        />
        <ReviewCard
          image="/reviews/Aisha.jpg"
          name="Aisha Sadiq"
          profession="Nurse"
          comment="The impact of your organization extends far beyond the numbers. 
                    You're not just providing assistance; 
                    you're restoring dignity and empowering individuals to thrive"
          isLarge={true}
          className="col-start-2 md:col-start-3 row-start-2 md:row-start-1 col-span-2 row-span-2 "
        />
        <ReviewCard
          image="/reviews/Zainab.jpg"
          name="Zainab Hassan"
          profession="Marketing Manager"
          comment="Thank you for providing a beacon of hope to those in need. 
                    Your dedication to making a difference is truly inspiring."
          isLarge={false}
          className="col-start-3 md:col-start-5 row-start-1 col-span-1 row-span-1 rounded-xl"
        />
        <ReviewCard
          image="/reviews/Ibrahim.webp"
          name="Ibrahim Yasir"
          profession="Financial Analyst"
          comment="I am grateful to be a part of such a meaningful cause. 
                    Keep up the incredible work in transforming lives and communities."
          isLarge={false}
          className="col-start-3 md:col-start-5 row-start-4 md:row-start-2 col-span-1 row-span-1 rounded-xl"
        />
        <ReviewCard
          image="/reviews/Hafsah.jpg"
          name="Hafsah Mohammed"
          profession="Human Resources Manager"
          comment="Your work embodies the true spirit of charity and selflessness. 
                    Thank you for being a beacon of light in a world that can often feel dark and uncertain."
          isLarge={false}
          className="col-start-4 md:col-start-6 row-start-2 md:row-start-1 col-span-1 row-span-1 rounded-xl"
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
      "my-auto flex flex-col w-fit h-fit justify-center",
      className
    )}>
    <CardHeader
      className={cn(
        "flex-row items-center pb-0",
        isLarge
          ? "space-x-4 md:space-x-8 px-6 md:px-12"
          : "space-x-2 md:space-x-4 px-2 md:px-4"
      )}>
      <Image
        src={image}
        alt=""
        width={isLarge ? 80 : 40}
        height={isLarge ? 80 : 40}
        className="rounded-full w-auto h-auto"
      />
      <div>
        <P
          className={cn(isLarge ? "text-lg md:text-xl" : "text-xs md:text-sm")}>
          {name}
        </P>
        <Small
          className={cn(
            "text-muted-foreground",
            isLarge ? "text-sm md:text-base" : "text-xs"
          )}>
          {profession}
        </Small>
      </div>
    </CardHeader>
    <CardContent className={cn("pt-0", isLarge ? "p-3 md:p-8" : "p-1 md:p-2")}>
      <div className="relative text-pretty">
        <QuoteIcon
          className={cn(
            "z-0 absolute left-0 rotate-180 text-slate-500/25",
            isLarge
              ? "w-8 md:w-16 h-8 md:h-16 top-2  md:top-4"
              : "w-3 md:w-6 h-3 md:h-6 top-0"
          )}
        />
        <Quote
          className={cn(
            "z-10 border-none text-pretty",
            isLarge
              ? "text-base md:text-lg lg:text-xl py-5 md:py-10 indent-8 md:indent-12"
              : "text-xs md:text-sm p-2 indent-4"
          )}>
          {comment}
        </Quote>
        <QuoteIcon
          className={cn(
            "absolute right-0 text-slate-500/25",
            isLarge
              ? "w-8 md:w-16 h-8 md:h-16 bottom-2 md:bottom-4"
              : "w-3 md:w-6 h-3 md:h-6 bottom-1 md:bottom-2"
          )}
        />
      </div>
    </CardContent>
  </Card>
);
