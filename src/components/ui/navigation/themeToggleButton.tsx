"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { DropdownMenuItem } from "../dropdown-menu"
import { ButtonWithDropdown, buttonWithDropdownVariants, Button as ButtonForDropdown, Dropdown } from '../buttonWithDropdown';
import { Button, buttonVariants} from '../button';
import { cn } from "../utils"

const Icon = () => (
    <>
        <SunIcon className="transition-transform duration-200 absolute h-[1.2rem] w-[1.2rem] rotate-0 text-inherit scale-100 hover:scale-110 dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="transition-transform duration-200 absolute h-[1.2rem] w-[1.2rem] text-inherit rotate-90 scale-0 dark-hover:scale-110 dark:rotate-0 dark:scale-100" />
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

export { ThemeToggleButtonWithDropdown, ThemeToggleButton };
