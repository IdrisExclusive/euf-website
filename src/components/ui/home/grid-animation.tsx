"use client";

import { cn } from "@/lib/utils";
import { MotionValue, motion, useTransform } from "framer-motion";
import { HTMLAttributes, forwardRef } from "react";
import { H1, H2, P } from "../typography";
import { Button } from "../button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const GridAnimation = ({springScroll, className}: {springScroll: MotionValue<number>, className?: string}) => {
  const rotateX = useTransform(springScroll, [0, 0.1, 1], [15, 0, 0]);
  const scale = useTransform(springScroll, [0, 0.1, 1], [1.05, 1, 1]);

  const scale11 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 1, 1]
  );
  const x11 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "0%", "0%"]
  );
  const y11 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "0%", "0%"]
  );

  const scale12 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.8, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 2, 1, 1]
  );
  const x12 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.8, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "50%", "50%", "50%", "0%", "0%"]
  );
  const y12 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.8, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "0%", "0%", "150%", "150%", "150%", "0%", "0%"]
  );

  const scale13 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.65, 0.85, 0.9, 1], 
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1]
  );
  const x13 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.65, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "0%", "0%", "-50%", "-50%", "250%", "250%", "0%", "0%"]
  );
  const y13 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.65, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "0%", "0%", "100%", "100%", "100%", "100%", "50%", "50%", "0%", "0%"]
  );

  const scale14 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  );
  const x14 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "-50%", "-50%",  "-50%", "-50%", "0%", "0%"]
  );
  const y14 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "50%","50%", "50%", "50%", "50%", "50%", "0%", "0%"]
  );

  const scale21 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65,0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 1, 1]
  );
  const x21 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65,0.85, 0.9, 1],
    ["0%", "0%", "0%", "-150%", "-150%", "-50%", "-50%", "0%", "0%"]
  );
  const y21 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "50%", "50%", "0%", "0%"]
  );

  const scale22 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.85, 0.9, 1],
    [2, 1, 1, 0,  0, 1, 1]
  );
  const x22 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.9, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "-100%", "0%", "0%",  "0%", "0%"]
  );
  const y22 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.9, 0.85, 0.9, 1],
    ["0%", "0", "0%", "100%", "0%", "0%", "0%", "0%"]
  );

  const scale24 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
  );
  const x24 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "-150%", "-150%", "-50%", "-50%", "-150%", "0%", "0%", "0%", "0%"]
  );
  const y24 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "50%", "50%", "-50%", "-50%", "50%", "50%", "50%", "0%", "0%"]
  );

  const scale31 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 1, 1]
  );
  const x31 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "-250%", "-250%", "50%", "50%", "0%", "0%"]
  );
  const y31 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.6, 0.65, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "-50%", "-50%", "50%","50%", "0%", "0%"]
  );

  const scale34 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.7, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 0, 0, 4, 4, 0, 0, 1, 1]
  );
  const x34 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.7, 0.9, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "-250%", "-250%", "0%", "0%", "-50%", "-50%", "-50%", "0%", "0%", "0%", "0%"]
  );
  const y34 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.7, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "50%", "50%", "0%", "0%", "-150%", "-150%", "-600%", "50%", "50%", "0%", "0%"]
  );

  const scale41 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 4, 4, 2, 2, 0, 0, 1, 1]
  );
  const x41 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "-150%",  "-150%", "-250%", "-250%", "-355%", "50%","50%", "0%", "0%"]
  );
  const y41 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["-50%", "0%", "0%", "150%", "150%", "50%", "50%", "-50%", "-50%", "-50%", "0%", "0%"]
  );

  const scale42 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
  );
  const x42 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "-300%", "-300%", "-50%", "-50%", "50%", "50%", "50%", "0%", "0%"]
  );
  const y42 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "250%", "250%", "-50%",  "-50%", "-150%", "0%", "0%", "0%", "0%"]
  );

  const scale43 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
  );
  const x43 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "-300%", "-300%", "-50%", "-50%", "50%", "50%", "50%", "0%", "0%"]
  );
  const y43 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["0%", "0%", "0%", "100%", "100%", "50%", "50%", "-250%", "0%", "0%", "0%", "0%"]
  );

  const scale44 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.85, 0.9, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  );
  const x44 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "50%", "50%", "0%", "0%", "50%", "50%", "50%", "0%", "0%"]
  );
  const y44 = useTransform(
    springScroll,
    [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.9, 0.85, 0.9, 1],
    ["50%", "0%", "0%", "50%", "50%", "-100%", "-100%", "-350%", "50%", "50%", "0%", "0%"]
  );

  const text1Opacity: any = useTransform(springScroll, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0])
  const text1Y: any = useTransform(springScroll, [0, 0.05, 0.15, 0.2], ["50%", "0%", "0%", "0%"])

  const text2Opacity: any = useTransform(springScroll, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0])
  const text2Y: any = useTransform(springScroll, [0.15, 0.2, 0.3, 0.35], ["50%", "0%", "0%", "0%"])

  const text22Opacity: any = useTransform(springScroll, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0])
  const text22Y: any = useTransform(springScroll, [0.3, 0.35, 0.45, 0.5], ["50%", "0%", "0%", "0%"])

  const text3Opacity: any = useTransform(springScroll, [0.45, 0.5, 0.6, 0.65], [0, 1, 1, 0])
  const text3Y: any = useTransform(springScroll, [0.45, 0.5, 0.6, 0.65], ["50%", "0%", "0%", "0%"])

  const text4Opacity: any = useTransform(springScroll, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0])
  const text4Y: any = useTransform(springScroll, [0.65, 0.7, 0.8, 0.85], ["50%", "0%", "0%", "50%"])

  const text5Opacity: any = useTransform(springScroll, [0.8, 0.85, 0.9, 1], [0, 1, 1, 1])
  const text5Y: any = useTransform(springScroll, [0.8, 0.85, 0.9, 1], ["50%", "0%", "0%", "0%"])

  return (
    <motion.div
        style={{ rotateX, scale, transformStyle: "preserve-3d" }}
        className={cn("justify-center items-center drop-shadow-2xl z-10 sticky top-20 lg:top-32 grid grid-flow-row grid-cols-4 grid-rows-4 mx-auto w-3/4 lg:w-3/4 aspect-phone sm:aspect-video", className)}>
        <motion.div
          style={{
            scale: scale11,
            x: x11,
            y: y11,
          }}
          className="col-start-1 row-start-1 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food5.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food5 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale12,
            x: x12,
            y: y12,
          }}
          className="col-start-1 row-start-2 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food3.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food3 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale13,
            x: x13,
            y: y13,
          }}
          className="col-start-1 row-start-3 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food4.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food4 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale14,
            x: x14,
            y: y14,
          }}
          className="col-start-1 row-start-4 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/water.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/water phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale21,
            x: x21,
            y: y21,
          }}
          className="col-start-2 row-start-1 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food2.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food2 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale22,
            x: x22,
            y: y22,
          }}
          className="z-40 col-start-2 row-start-2 col-span-2 row-span-2 aspect-phone sm:aspect-video object-center">
            <Image 
                src="/borehole/tap.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/tap phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale24,
            x: x24,
            y: y24,
          }}
          className="col-start-2 row-start-4 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/tap4.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/tap4 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale31,
            x: x31,
            y: y31,
          }}
          className="col-start-3 row-start-1 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food1.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food1 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale34,
            x: x34,
            y: y34,
          }}
          className="z-20 col-start-3 row-start-4 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/food/food.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/food/food phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale41,
            x: x41,
            y: y41,
          }}
          className="z-30 col-start-4 row-start-1 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/drilling.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/drilling phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale42,
            x: x42,
            y: y42,
          }}
          className="col-start-4 row-start-2 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/tap1.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/tap1 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale43,
            x: x43,
            y: y43,
          }}
          className="col-start-4 row-start-3 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/tap2.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/tap2 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <motion.div
          style={{
            scale: scale44,
            x: x44,
            y: y44,
          }}
          className="col-start-4 row-start-4 col-span-1 row-span-1 aspect-phone sm:aspect-video">
            <Image 
                src="/borehole/tap3.jpg"
                alt=""
                width={1024}
                height={576}
                className="hidden sm:block"
            />
            <Image 
                src="/borehole/tap3 phone.jpg"
                alt=""
                width={1024}
                height={576}
                className="block sm:hidden"
            />
          </motion.div>
        <DetailsMotion 
            title="A Story of Hope: Our Charity's Impact"
            text="In communities facing water scarcity and food insecurity, our charity organization steps in with solutions that bring hope and relief."
            className="absolute left-16 z-50"
            style={{opacity: text1Opacity, y: text1Y}}
             />
        <DetailsMotion 
            title="Quenching Thirst: Boreholes for Clean Water"
            text="We drill boreholes, providing clean water to communities in need, ensuring families have access to this essential resource."
            className="absolute left-16 z-50"
            style={{opacity: text2Opacity, y: text2Y}}
             />
        <DetailsMotion 
            title="Sustaining Communities: Providing Clean Water"
            text="With each borehole we drill, we ensure that families have access to safe and reliable water sources promoting overall well-being within the community."
            className="absolute left-16 z-50"
            style={{opacity: text22Opacity, y: text22Y}}
             />
        <DetailsMotion 
            title="Nourishing Souls: Wholesome Meals for Those in Need"
            text="Additionally, we offer nutritious meals to poor communities, offering nourishment and comfort during difficult times."
            className="absolute left-16 z-50"
            style={{opacity: text3Opacity, y: text3Y}}
             />
        <DetailsMotion 
            title="Empowering Families: Raw Food Material Support"
            text="To empower families further, we provide raw food materials, enabling them to prepare meals for themselves, fostering self-sufficiency."
            className="absolute left-16 z-50"
            style={{opacity: text4Opacity, y: text4Y}}
             />
        <DetailsMotion
            text="Through these initiatives, we're making a tangible difference in the lives of those we serve, one borehole, one meal, and one family at a time."
            showButton
            className="absolute left-16 z-50"
            style={{opacity: text5Opacity, y: text5Y}}
             />
      </motion.div>
  )
};

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        "flex flex-col w-full gap-4 h-fit my-4 mx-auto justify-center items-center",
        className
      )}>
      <H2 className="text-center border-none text-primary dark:text-slate-300">
        Project Gallery
      </H2>
      <Button className="group gap-2 justify-between">
        <div className="px-8 text-slate-100">Go to project page</div>
        <ArrowRightIcon className="text-slate-100 translate-x-0 group-hover:translate-x-[2px] transition-transform delay-75 duration-150" />
      </Button>
    </div>
  )
);

interface detailsProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    text: string;
    showButton?: boolean;
}

const Details = forwardRef<HTMLDivElement, detailsProps>(
  ({ className, title, text, showButton = false, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        "relative flex flex-col w-2/3 sm:w-1/2 h-fit justify-center items-start",
        className
      )}>
        <div className="flex flex-col mx-4 sm:mx-8 lg:mx-16 gap-4 py-8">
            {title && <H1 className="font-bold sm:font-extrabold tracking-normal sm:tracking-tight border-l-8 sm:border-l-[16px] border-accent px-2 sm:px-4 text-slate-300">
                {title}
            </H1>}
            <P className="text-sm sm:text-base lg:text-lg w-full text-slate-100">
                {text}
            </P>
        </div>
      {showButton && <Button className="group gap-2 h-8 md:h-9 justify-between mx-4 sm:mx-8 lg:mx-16 mb-8">
        <div className="px-2 text-slate-100">Explore Projects</div>
        <ArrowRightIcon className="text-slate-100 translate-x-0 group-hover:translate-x-[2px] transition-transform delay-75 duration-150" />
      </Button>}
      <div className="absolute -z-10 w-full h-full backdrop-blur-sm bg-slate-900/60"></div>
    </div>
  )
);

const DetailsMotion = motion(Details);
