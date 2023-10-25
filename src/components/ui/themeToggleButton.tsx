"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { DropdownMenuItem } from "./dropdown-menu"
import { ButtonWithDropdown } from './buttonWithDropdown';
import { buttonVariants } from "./button"
import { type VariantProps } from "class-variance-authority"


const ThemeToggleButton = ({variant, size="icon"}: VariantProps<typeof buttonVariants>) => {
    const { theme, setTheme} = useTheme();
    return(
    <ButtonWithDropdown
        variant={variant}
        size={size}
        onClick={() => (theme === "light") ? setTheme("dark") : setTheme("light")}
        buttonContent={
            <>
                <SunIcon className="transition-all delay-100 duration-300 absolute h-[1.2rem] w-[1.2rem] rotate-0 text-inherit scale-100 hover:rotate-90 dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="transition-all delay-100 duration-300 absolute h-[1.2rem] w-[1.2rem] text-inherit rotate-90 scale-0 hover:-rotate-90 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </>
        } 
        dropdownContent={
            <>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </>
        }/>
    )
};

export { ThemeToggleButton };
