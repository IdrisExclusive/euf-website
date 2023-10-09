import { StoryObj, Meta } from "@storybook/react"

import { ThemeToggleButton } from "./themeToggleButton"
import { Button } from "./button";

const meta: Meta<typeof ThemeToggleButton> = {
    title: "UI/ToggleButton",
    component: ThemeToggleButton
}

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const ToggleButton: Story = {
    args: {

    }
}