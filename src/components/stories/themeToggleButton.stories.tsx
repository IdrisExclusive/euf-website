import { StoryObj, Meta } from "@storybook/react"
import { jest } from "@storybook/jest"

import { ThemeToggleButton } from "../ui/navigation/themeToggleButton"
import { userEvent, within } from "@storybook/testing-library"

const meta: Meta<typeof ThemeToggleButton> = {
    title: "UI/Button/ThemeToggleButton",
    component: ThemeToggleButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {
      play: async ({canvasElement}) => {
        

        const canvas = within(canvasElement);
        const darkThemeButton = canvas.getByRole("button");
        
        await userEvent.click(darkThemeButton)

      }
}