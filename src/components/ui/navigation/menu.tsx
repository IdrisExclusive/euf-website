"use client"

import React, { useState } from "react";
import { MenuToggleBotton, type sizeType } from "./menuToggleButton";
import { SidebarWithDarkToggle, sidebarProps, type menuItemsType } from "./sidebar";
import { Variants, motion } from "framer-motion";

export const thisMenuItems: menuItemsType = [
    {title: "Home", url: "#"},
    {title: "About", url: "#"},
    {title: "Help", url: "#"},
];

const menuVariants: Variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.005,
                     delay: 0.1,}
    },
    closed: {
        opacity: 0,
        x: "-100%",
        transition: {duration: 0.005,
                     when: "afterchildren"}
    },
}

export interface menuProps extends sidebarProps {
    buttonSize?: sizeType
}


const Menu = React.forwardRef<HTMLDivElement, menuProps>(({className, position, positionItems, width, background, menuItems=thisMenuItems, buttonSize="md"}) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    return (
        <motion.div data-state={isOpen? "open" : "closed"} className={`group fixed top-0 ${position==="right"? "right-0" : "left-0" } z-10 sm:hidden w-12 h-12 bg-transparent`}
        initial={false}
        animate={isOpen? "open" : "closed"}
        >
            <MenuToggleBotton size={buttonSize} toggle={() => setIsOpen(!isOpen)}/>
            <motion.div className="fixed top-0 left-0 z-10 sm:hidden bg-transparent w-full h-full"
                variants={menuVariants}>
                <SidebarWithDarkToggle className={className} position={position} positionItems={positionItems} width={width} background={background} menuItems={menuItems} />
                <div className={`${ isOpen && "w-full h-full flex z-10 bg-foreground/10"}`} onClick={() => {setIsOpen(!isOpen)}}></div>
            </motion.div>
        </motion.div>
    )
});

export { Menu };