"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { DropdownMenuItem } from "../dropdown-menu"
import { ButtonWithDropdown, buttonWithDropdownVariants, Button as ButtonForDropdown, Dropdown } from '../buttonWithDropdown';
import { Button, buttonVariants} from '../button';
import { cn } from "../../../lib/utils"

const Icon = () => (
    <>
        <SunIcon className="transition-transform duration-200 absolute h-[1.2rem] w-[1.2rem] rotate-0 text-slate-100 scale-100 hover:scale-110 dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="transition-transform duration-200 absolute h-[1.2rem] w-[1.2rem] text-slate-100 rotate-90 scale-0 dark-hover:scale-110 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </>
)


const ThemeToggleButtonWithDropdown = React.forwardRef<React.ElementRef<typeof ButtonWithDropdown>, React.ComponentPropsWithoutRef<typeof ButtonWithDropdown>>(
     ({variant, size="sm", className, ...props}, ref) => {
    const { theme, setTheme} = useTheme();
    return(
        <ButtonWithDropdown 
            className={cn(buttonWithDropdownVariants({size, variant, className}), 'shrink-0')}
            ref={ref}
            {...props}>
            <ButtonForDropdown
                onClick={() => (theme === "light") ? setTheme("dark") : setTheme("light")}
                className="hover:bg-slate-400/20"
            >
                <Icon />    
            </ButtonForDropdown>
            <Dropdown className="hover:bg-slate-400/20" >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </Dropdown>
        </ButtonWithDropdown>
        )
    }
);

const ThemeToggleButton = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentPropsWithoutRef<typeof Button>>(
    ({variant, size="icon", className, ...props}, ref) => {
   const { theme, setTheme} = useTheme();
   return(
       <Button
            onClick={() => (theme === "light") ? setTheme("dark") : setTheme("light")}
            className={cn(buttonVariants({variant, size, className}), "shrink-0")}
            ref={ref}
            {...props}
       >
            <Icon />
        </Button>
       )
   }
);

const ThemeToggleSwitch = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => {
        const {theme, setTheme} = useTheme()
        const onClick: () => void = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
        return <div 
        onClick={onClick}
        className = {cn("flex justify-start items-start p-1 w-16 h-10 bg-accent/50 rounded-full focus:outline-none hover:cursor-pointer hover:bg-accent/40 transition-colors duration-300", className)}
        {...props} 
        ref={ref}>
            <button
            className="flex justify-center items-center w-8 h-8 bg-primary shadow-sm rounded-full shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 hover:shadow transition-all duration-300 delay-100 translate-x-0 dark:translate-x-6">
                <Icon />
            </button>
        </div>
    }
)

export { ThemeToggleButtonWithDropdown, ThemeToggleButton, ThemeToggleSwitch};
