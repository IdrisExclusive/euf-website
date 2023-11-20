import React from 'react';
import { Menu, menuProps, thisMenuItems } from './menu';
import { type menuItemsType } from './sidebar'
import Image from 'next/image';
import { SignUpBotton } from './signUpBotton';
import { ThemeToggleButtonWithDropdown } from './themeToggleButton';
import { Url } from 'next/dist/shared/lib/router/router';
import { Button } from '../button';
import Link from 'next/link';
import { cn } from '../utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { buttonWithDropdownProps } from '../buttonWithDropdown';

const navLinks: {title: String; url: Url}[] = [
  {title: "About", url: "#"},
  {title: "Help", url: "#"}
]

export const navbarVariants = cva('fixed h-12 backdrop-blur shadow-md left-0 right-0 top-0 flex justify-between items-center py-2 sm:px-6 md:px-12 lg:px-48  space-x-4', {
  variants: {
    background: {
      blank: "bg-background/10",
      primary: "bg-primary/50",
      secondary: "bg-secondary/50",
      accent: "bg-accent/50"
    },
    menuSlot: {
      left: "pl-14 pr-4",
      right: "pr-14 pl-4"
    }
  },
  defaultVariants: {
    background: "blank",
    menuSlot: "left"
  }
})

export interface navbarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof navbarVariants> {
  logoSrc: string | StaticImport;
  navLinks: menuItemsType
}

export const Navbar = React.forwardRef<HTMLDivElement, navbarProps>(
  ({className, background, menuSlot, logoSrc, navLinks, children, ...props}, ref) => (
  <div className={cn(navbarVariants({background, menuSlot, className}))} ref={ref} {...props} >
      <div className='inline-flex space-x-2 sm:space-x-4 justify-start items-center'>
        <Image src={logoSrc} alt='logo' width='24' height='24' />
        <ul className='hidden sm:inline-flex justify-start space-x-4 px-4 text-md font-semibold text-primary-foreground'>
          {navLinks.map(link => (
            <Button variant="ghost" size="sm">
              <Link href={link.url}>
                {link.title}
              </Link>
            </Button>
          ))}
        </ul>
      </div>
      {children}
    </div>
  )
)

interface NavbarWithMenuProps extends menuProps, buttonWithDropdownProps {logoSrc: string | StaticImport}

const NavbarWithMenu = React.forwardRef<HTMLDivElement, NavbarWithMenuProps>((props, ref) => (
  <div ref={ref}>
    <Menu position={props.position} background={props.background}  positionItems={props.positionItems} width={props.width} buttonSize={props.buttonSize} menuItems={thisMenuItems} />
    <Navbar background={props.background} menuSlot={props.position} logoSrc={props.logoSrc}  navLinks={navLinks}>
      <div className='inline-flex space-x-4 justify-end items-center'>
        <SignUpBotton variant={props.variant} size={props.size} />
        <ThemeToggleButtonWithDropdown variant={props.variant} size={props.size} className='hidden sm:inline-flex'  />
      </div>
    </Navbar>
  </div>
  )
)

export { NavbarWithMenu };