import React, { useState } from "react";
import { MenuToggleBotton } from "./menuToggleButton";
import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";


const Menu = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    return (
        <motion.div 
        initial={false}
        animate={isOpen? "open" : "closed"}>
            <MenuToggleBotton toggle={() => setIsOpen(!isOpen)}/>
            <Sidebar />
        </motion.div>
    )
};

export { Menu };