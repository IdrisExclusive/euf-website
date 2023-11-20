import { Meta, StoryObj } from "@storybook/react"
import { Menu } from "../ui/navigation/menu"
import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

const meta: Meta<typeof Menu> = {
    component: Menu,
    title: "UI/Nav/Menu",
    tags: ["autodocs"],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "iphonexsmax"
        }
    }
}

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    
}

export const OpenAndCloseMenu: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const menuButton = canvas.getByRole("button", {name: /menu toggle button/i})
        await userEvent.click(menuButton, {delay: 500})
        await userEvent.click(menuButton, {delay: 500})
    }
}