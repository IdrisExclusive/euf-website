"use client"
 
import * as React from "react"
import { useState } from "react"
import { MoonIcon, SunIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
 
export function ThemeToggleButton() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [dropdownClicked, setDropdownClicked] = useState(false);
    const { setTheme} = useTheme();

    return (
    <div className="flex ">
        <Button variant="outline" size="icon" className="rounded-l-full">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="outline" size="icon" onClick={ () => setDropdownClicked(!dropdownClicked) } className="rounded-r-full">
                    <ChevronDownIcon className={`transition-transform h-[1.2rem} w-[1.2rem] ${dropdownClicked? "rotate-180" : "rotate-0"}`} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
    )
}