import { StoryObj, Meta } from "@storybook/react"

import { ThemeToggleButton } from "./themeToggleButton"

const meta: Meta<typeof ThemeToggleButton> = {
    title: "UI/ToggleButton",
    component: ThemeToggleButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const ToggleButton: Story = {
    args: {

    }
}