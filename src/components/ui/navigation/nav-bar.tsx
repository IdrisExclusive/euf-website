"use client";

import React, { useRef, useState } from "react";
import { Menu, menuProps } from "./menu";
import { menuItems, type menuItemsType } from "../../../lib/data/home-data";
import Image from "next/image";
import { SignUpBotton } from "./signUpBotton";
import { ThemeToggleButton, ThemeToggleSwitch } from "./themeToggleButton";
import { Button } from "../button";
import Link from "next/link";
import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { buttonWithDropdownProps } from "../buttonWithDropdown";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const navbarVariants = cva(
  "fixed w-full h-16 backdrop-blur shadow-md left-0 right-0 top-0 flex justify-between items-center py-4  space-x-4",
  {
    variants: {
      background: {
        blank: "bg-background/10",
        primary: "bg-primary/50",
        secondary: "bg-secondary/50",
        accent: "bg-accent/50",
      },
      menuslot: {
        left: "px-2", //"pl-14 pr-4",
        right: "px-2", // "pr-14 pl-4",
      },
    },
    defaultVariants: {
      background: "blank",
      menuslot: "left",
    },
  }
);

export interface navbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {
  logosrc: string | StaticImport;
  navlinks: menuItemsType;
}

export const Navbar = React.forwardRef<HTMLDivElement, navbarProps>(
  (
    { className, background, menuslot, logosrc, navlinks, children, ...props },
    ref
  ) => (
    <div
      className={cn(
        navbarVariants({ background, menuslot, className }),
        "w-full"
      )}
      ref={ref}
      {...props}>
      <div className="inline-flex space-x-2 sm:space-x-4 justify-start items-center">
        <Link href="/">
          <Image
            src="/euf-logo.svg"
            alt="logo"
            width="48"
            height="24"
            priority={true}
            className="w-20 h-10 object-covert"
          />
        </Link>
        {/* <ul className="hidden md:inline-flex justify-start md:max-lg:space-x-4 space-x-0 lg:space-x-8 px-8 text-md font-semibold text-primary-foreground">
          {navlinks.map((link, i) => (
            <Button
              key={i}
              variant="ghost"
              size="sm"
              className="text-foreground hover:-translate-y-1 delay-150 duration-300">
              <Link href={link.url}>{link.title}</Link>
            </Button>
          ))}
        </ul> */}
      </div>
      {children}
    </div>
  )
);

export const NavbarMotion = motion(Navbar);

interface NavbarWithMenuProps extends menuProps, buttonWithDropdownProps {
  logosrc: string | StaticImport;
}

export const NavbarWithMenu = ({
  className,
  position,
  background,
  positionItems,
  width,
  buttonsize,
  logosrc,
  size,
  variant,
  children,
}: NavbarWithMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavBar] = useState<boolean>(true);
  const { scrollYProgress } = useScroll({ target: ref });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (window.innerWidth < 640) {
      const scrollDiff =
        current && scrollYProgress.getPrevious()
          ? current - scrollYProgress.getPrevious()!
          : 0;
      scrollDiff < 0.00005
        ? setShowNavBar(true)
        : scrollDiff < 0
          ? setShowNavBar(true)
          : setShowNavBar(false);
    }
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col justify-center items-center w-full",
        className
      )}>
      <motion.div
        className="z-20 w-full bg-blue-500"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}>
        {/* <Menu
          position={position}
          background={background}
          positionItems={positionItems}
          width={width}
          buttonsize={buttonsize}
          menuitems={menuItems}
        /> */}
        <Navbar
          background={background}
          menuslot={position}
          logosrc={logosrc}
          navlinks={menuItems}
          className={className}>
          <div className="px-4 md:px-16 lg:px-28 inline-flex space-x-4 md:space-x-4 justify-end items-center">
            {/* <SignUpBotton variant={variant} size={size} /> */}
            <Button variant={variant} size={size} asChild>
              <Link href="https://helpa-v1-prod.vercel.app/ngos/x0DvHJ ">
                Donate Now
              </Link>
            </Button>
            <ThemeToggleSwitch className="hidden sm:inline-flex" />
            <ThemeToggleButton className="inline-flex sm:hidden" />
          </div>
        </Navbar>
      </motion.div>
      <div className="z-10">{children}</div>
    </div>
  );
};
