import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import { Variants, motion, px } from 'framer-motion';

interface menuLink {
    title: String;
    link: Url;
}

const menuItems: Array<menuLink> = [
    {title: "Home", link: "#"},
    {title: "About", link: "#"},
    {title: "Help", link: "#"},
];

const sidebarVariants: Variants = {
    open: {
        x: 0,
        transition: {type: "string",
                     stiffness: 20,
                     restDelta: 2,
                     duration: 0.65,
                     delay: 0.1,}
    },
    closed: {
        x: "-100%",
        transition: {type: "string",
                     stiffness: 20,
                     restDelta: 2,
                     duration: 0.5,
                     when: "afterchildren"}
    },
}

const listVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.15, delayChildren: 0.6
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.03, staggerDirection: -1
        }
    }
}

const itemVariants: Variants = {
    open: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            stiffness: 1000,
        }
    },
    closed: {
        y: "80%",
        x: "-20%",
        opacity: 0,
        transition: {
            stiffness: 1000,
            duration: 0.1
        }
    },
}

const Sidebar = () => (
    <motion.div className='z-0 absolute inset-y-0 left-0 p-12 w-3/4 max-w-md bg-primary/10 backdrop-blur'
                variants={sidebarVariants}>
        <motion.ul className='font-extrabold text-3xl text-center text-primary-foreground space-y-10'
                    variants={listVariants}>
            {
                menuItems.map(
                    item => (
                        <motion.li
                        whileHover={{
                            scale: 1.2,
                            color: "hsl(var(--accent))"
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        variants={itemVariants} >
                            <Link href={item.link} >
                                {item.title}
                            </Link>
                            
                        </motion.li>
                    )
                )
            }
        </motion.ul>
    </motion.div>
);

export { Sidebar };