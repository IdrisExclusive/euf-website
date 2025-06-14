"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroButtons, HeroTexts } from "./hero-text-and-botton";
import { GridAnimation } from "./grid-animation";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const springScroll = useSpring(scrollYProgress);

  const y = useTransform(springScroll, [0, 0.2], ["0%", "-75%"]);

  return (
    <div ref={ref} className="w-full" style={{ perspective: "1000px" }}>
      <motion.div
        style={{ y }}
        className="relative z-20 mx-auto px-4 md:px-16 mb-10 mt-20 md:mt-40 md:mb-20 lg:px-8 w-full lg:w-4/5 max-w-[1280px] flex flex-col items-center justify-center space-y-8 md:space-y-16">
        <HeroTexts className="z-20 w-full md:w-4/5 h-fit" />
        <HeroButtons className="z-20 h-10 w-full md:w-4/5" />
        <div className="z-0 w-full h-full bg-gradient-to-bl from-primary/90 from-5% to-secondary blur-[150px] absolute"></div>
      </motion.div>
      <GridAnimation springScroll={springScroll} className="-mt-20" />
      <div className="w-full h-[300vh]"></div>
    </div>
  );
};
