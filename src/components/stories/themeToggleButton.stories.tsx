import { StoryObj, Meta } from "@storybook/react"

import { ThemeToggleButton } from "../ui/navigation/themeToggleButton"

const meta: Meta<typeof ThemeToggleButton> = {
    title: "UI/ToggleButton",
    component: ThemeToggleButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {
      
}