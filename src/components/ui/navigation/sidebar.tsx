import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import { ThemeToggleButton } from './themeToggleButton';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../utils';
import clsx from 'clsx';

export type menuItemsType = {title: String; url: Url}[]

const sidebarVariants = cva("absolute flex flex-col gap-8 justify-between items-center z-30 px-6 py-12 h-full max-w-md backdrop-blur",
    {
        variants: {
            position: {
                left: "inset-y-0 left-0 transition-transform delay-100 duration-500 group-data-[state=closed]:-translate-x-[100%] group-data-[state=open]:translate-x-0",
                right: "inset-y-0 right-0 transition-transform delay-100 duration-500 group-data-[state=closed]:translate-x-[100%] group-data-[state=open]:translate-x-0"
            },
            positionItems: {
                start: "items-start",
                end: "items-end",
                center: "items-center"
            },
            width: {
                full: "w-full",
                "1/2": "w-1/2",
                "3/4": "w-3/4"
            },
            background: {                
                blank: "bg-background/10",
                primary: "bg-primary/10",
                secondary: "bg-secondary/10",
                accent: "bg-accent/10",
            }
        },
        defaultVariants: {
            position: "left",
            positionItems: "center",
            width: "3/4",
            background: "accent"
        }
    }
)

const listVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.25, delayChildren: 0.4
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.1, staggerDirection: -1
        }
    }
}

const itemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 1000,
        }
    },
    closed: {
        y: "80%",
        opacity: 0,
        transition: {
            stiffness: 1000,
            duration: 0.1
        }
    },
}

type textAlignOptions = "left" | "right" | "center"

export interface sidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
    textAlign?: textAlignOptions;
    menuItems: menuItemsType;
}

const Sidebar = React.forwardRef<HTMLDivElement, sidebarProps> (
    ({className, position, positionItems, width, background, menuItems, children, ...props}, ref) => (
    <div className={cn(sidebarVariants({position, positionItems, width, background, className}))}
        ref={ref}
        {...props}
        >
        <motion.ul className={clsx('font-extrabold text-3xl text-primary-foreground space-y-10', 
            {"text-left" : positionItems === "start", 
            "text-right" : positionItems === "end", 
            "text-center" : positionItems === "center"}
            )}
                    variants={listVariants}>
            {
                menuItems.map(
                    item => (
                        <motion.li
                        initial={{color: "hsl(var(--primary-foreground))"}}
                        whileHover={{
                            color: "hsl(var(--accent))"
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        variants={itemVariants} >
                            <Link href={item.url} >
                                {item.title}
                            </Link>
                            
                        </motion.li>
                    )
                )
            }
        </motion.ul>
        {children}
    </div>
    )
);

const SidebarWithDarkToggle = React.forwardRef<HTMLDivElement, sidebarProps>(
    (props, ref) => (
    <Sidebar ref={ref} {...props}>
        <ThemeToggleButton />
    </Sidebar>
    )
)

export { Sidebar, SidebarWithDarkToggle };