"use client"

import React, { useState } from "react";
import { MenuToggleBotton, type sizeType } from "./menuToggleButton";
import { SidebarWithDarkToggle, sidebarProps } from "./sidebar";
import { Variants, motion } from "framer-motion";
import { menuItems as thisMenuItems } from "../../../lib/data/home-data";

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
    buttonsize?: sizeType
}


const Menu = React.forwardRef<HTMLDivElement, menuProps>(({className, position, positionItems, width, background, menuitems=thisMenuItems, buttonsize="md"}, ref) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    return (
        <motion.div data-state={isOpen? "open" : "closed"} className={`group fixed top-0 ${position==="right"? "right-0" : "left-0" } z-10 md:hidden w-12 h-16 bg-transparent`}
        initial={false}
        animate={isOpen? "open" : "closed"}
        >
            <MenuToggleBotton size={buttonsize} toggle={() => setIsOpen(!isOpen)}/>
            <motion.div className="fixed top-0 left-0 z-10 md:hidden bg-transparent w-full h-full"
                variants={menuVariants}>
                <SidebarWithDarkToggle className={className} position={position} positionItems={positionItems} width={width} background={background} menuitems={menuitems} />
                <div className={`${ isOpen && "w-full h-full flex z-10 bg-foreground/10"}`} onClick={() => {setIsOpen(!isOpen)}}></div>
            </motion.div>
        </motion.div>
    )
});

export { Menu };