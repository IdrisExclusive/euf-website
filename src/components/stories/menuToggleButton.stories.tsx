import { Meta, StoryObj } from "@storybook/react"
import { MenuToggleBotton } from "../ui/navigation/menuToggleButton"
import { useState } from "react"
import { motion } from "framer-motion"

const meta: Meta<typeof MenuToggleBotton> = {
    component: MenuToggleBotton,
    title: "UI/MenuToggleBotton",
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            const [isOpen, setIsOpen] = useState<Boolean>(false);
            return(
            <motion.div
                animate={isOpen? "open" : "close"}>
                <Story 
                    toggle={ () => setIsOpen(!isOpen) }  />
            </motion.div>
            )
        }
    ]
}

export default meta;

type Story = StoryObj<typeof MenuToggleBotton>;

export const Default: Story = {
    
}