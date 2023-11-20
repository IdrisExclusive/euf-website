import React from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
 
import { buttonVariants} from "./button"
import { VariantProps, cva } from "class-variance-authority"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu"

import { cn } from './utils'

const buttonWithDropdownVariants = cva(
  "inline-flex items-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md",
        cta: "text-primary-foreground bg-primary shadow-lg shadow-secondary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md",
        outline:
          "border border-input bg-transparent shadow-md hover:bg-accent text-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md",
        ghost: "text-accent  hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm h-9",
        sm: "h-8 text-xs",
        lg: "h-10 text-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface buttonWithDropdownProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonWithDropdownVariants>{}

const ButtonWithDropdown = React.forwardRef<HTMLDivElement, buttonWithDropdownProps>(
  ({variant, size, className, children, ...props}, ref) => (
      <div 
        className={cn(buttonWithDropdownVariants({variant, size, className}))}
        ref={ref}
        {...props}>
        {children}
      </div>
  ) 
)

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({className, children, ...props}, ref) => (
    <button
            className={cn(className, "flex h-full px-4 rounded-l-full justify-center items-center basis-4/5 border-r-2 border-background focus:outline-none")}
            ref={ref}
            {...props}
        >
          {children}
    </button>
  )
)

const Dropdown = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({className, children, ...props}, ref) =>(
    <DropdownMenu >
    <DropdownMenuTrigger asChild className="group">
      <button
        className={cn(className, "h-full px-2 rounded-r-full basis-1/5 focus:outline-none")}
        ref={ref}
        {...props}
      >
        <ChevronDownIcon
          className="mx-auto transition-transform delay-75 text-inherit h-[1.2rem] w-[1.2rem] group-hover:scale-110 group-hover:translate-y-[2px] group-data-[state=open]:scale-110 group-data-[state=open]:rotate-180 focus:outline-none"
        />
        <span className="sr-only">Toggle theme</span>
      </button>
    </DropdownMenuTrigger >
    <DropdownMenuContent align="end" >
      {children}
    </DropdownMenuContent >
  </DropdownMenu >
  )
)

export { ButtonWithDropdown, buttonWithDropdownVariants, Button, Dropdown };
