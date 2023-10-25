"use client"
 
import React,  { useState } from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
 
import { Button, buttonVariants, ButtonProps } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu"

import { cn } from './utils'

interface ButtonWithDropdownProps extends ButtonProps {
    buttonContent: React.ReactElement;
    dropdownContent: React.ReactElement;
  }

const ButtonWithDropdown = React.forwardRef<HTMLButtonElement, ButtonWithDropdownProps>(
  ({ className, variant, size, buttonContent, dropdownContent, ...props }, ref) => {
    const [dialogOpen, setDialogOpen] = useState<Boolean>(false);
    console.log(dialogOpen)
    return (
      <div className="flex" >
        <Button
          className={cn(buttonVariants({ variant, size, className}), "z-0 rounded-l-full")}
          ref={ref}
          {...props}
        >
          {buttonContent}
        </Button>
        <DropdownMenu onOpenChange={() => setDialogOpen(!dialogOpen)} >
          <DropdownMenuTrigger asChild >
            <Button
              variant={variant}
              size={size}
              className="z-1 rounded-r-full px-2"
            >
              <ChevronDownIcon
                className={`transition-transform delay-75 text-inherit h-[1.2rem] w-[1.2rem] ${ dialogOpen? 'rotate-180' : 'rotate-0'}`}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {dropdownContent}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
);

export { ButtonWithDropdown };
