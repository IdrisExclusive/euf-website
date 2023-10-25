"use client"
 
import * as React from "react"
 
import { DropdownMenuItem } from "./dropdown-menu"
import { ButtonWithDropdown } from './buttonWithDropdown';
import { buttonVariants } from "./button"
import { type VariantProps } from "class-variance-authority"


const SignUpBotton = ({variant="cta", size="lg"}: VariantProps<typeof buttonVariants>) => {
    return(
    <ButtonWithDropdown
        className=" transition-transform delay-100 duration-200 hover:scale-105 active:scale-95"
        variant={variant}
        size={size}
        buttonContent={
            <div>
               Donate Now 
            </div>
        } 
        dropdownContent={
            <>
                <DropdownMenuItem >
                    Donate
                </DropdownMenuItem>
                <DropdownMenuItem >
                    Sign up
                </DropdownMenuItem>
                <DropdownMenuItem >
                    Sign in
                </DropdownMenuItem>
            </>
        }/>
    )
};

export { SignUpBotton };
