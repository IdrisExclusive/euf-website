import { Meta, StoryObj } from "@storybook/react"
import { Menu } from "../ui/navigation/menu"

const meta: Meta<typeof Menu> = {
    component: Menu,
    title: "UI/Menu",
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    
}