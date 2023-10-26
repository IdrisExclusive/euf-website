import { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "../ui/navigation/sidebar"

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: "UI/Sidebar",
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    
}