import * as React from "react"
import { DropdownMenuItem } from "../dropdown-menu"
import { ButtonWithDropdown, buttonWithDropdownVariants, Button, Dropdown } from '../buttonWithDropdown';
import { cn } from "../utils";


const SignUpBotton = React.forwardRef<React.ElementRef<typeof ButtonWithDropdown>, React.ComponentPropsWithoutRef<typeof ButtonWithDropdown>>(
    ({variant, size, className, ...props}, ref) => (
    <ButtonWithDropdown
        className={cn(buttonWithDropdownVariants({variant, size, className}),"transition-transform delay-100 duration-200 hover:scale-105 active:scale-95")}
        ref={ref}
        {...props}
        >
        <Button className="hover:bg-slate-400/20">
            Donate Now
        </Button>
        <Dropdown className="hover:bg-slate-400/20">
            <DropdownMenuItem >
                Donate
            </DropdownMenuItem>
            <DropdownMenuItem >
                Sign up
             </DropdownMenuItem>
             <DropdownMenuItem >
                Sign in
            </DropdownMenuItem>
        </Dropdown>
        </ButtonWithDropdown>
    )
);

export { SignUpBotton };
