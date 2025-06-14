import * as React from "react";
import { DropdownMenuItem } from "../dropdown-menu";
import {
  ButtonWithDropdown,
  buttonWithDropdownVariants,
  Button,
  Dropdown,
} from "../buttonWithDropdown";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const SignUpBotton = React.forwardRef<
  React.ElementRef<typeof ButtonWithDropdown>,
  React.ComponentPropsWithoutRef<typeof ButtonWithDropdown>
>(({ variant, size, className, ...props }, ref) => (
  <ButtonWithDropdown
    className={cn(
      buttonWithDropdownVariants({ variant, size, className }),
      "transition-transform delay-100 duration-200 hover:scale-105 active:scale-95"
    )}
    ref={ref}
    {...props}>
    <Button className="hover:bg-zinc-400/20">
      <Link href="#">Donate Now</Link>
    </Button>
    <Dropdown className="hover:bg-zinc-400/20">
      <DropdownMenuItem asChild>
        <Link href="#">Donate</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/signup">Sign up</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/signin">Sign in</Link>
      </DropdownMenuItem>
    </Dropdown>
  </ButtonWithDropdown>
));

export { SignUpBotton };
