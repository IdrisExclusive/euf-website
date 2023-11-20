import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../ui/button';
import { MoonIcon } from "@radix-ui/react-icons";
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest'
            
const meta: Meta<typeof Button> = {
    title: 'UI/Button/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Click Me!',
        className: 'rounded-full',
    },
    argTypes: {
        variant: {
            control: "color"
        }
    }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    play: async ({canvasElement}) => {
        //const handleClick = jest.fn( () => {})
        const canvas = within(canvasElement)
        const button = canvas.getByRole("button", {name: /Click Me!/i})
        await userEvent.click(button)
        await expect(button.innerText).toBe("Click Me!")
    }    
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    }
}

export const CTA: Story = {
    args: {
        variant: 'cta',
    }
}

export const Error: Story = {
    args: {
        variant: 'destructive',
    }
}

export const Outline: Story = {
    args: {
        variant: "outline"
    }
}

export const Link: Story = {
    args: {
        variant: "link"
    }
}

export const Icon: Story = {
    args: {
        ...Primary.args,
        variant: 'outline',
        size: 'icon',
        children: <MoonIcon />        
    },
    play:async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole("button")
        await userEvent.click(button)
    }
}

export const HoverIcon: Story = {
    args: {...Icon.args},
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button')
        await userEvent.hover(button)
    }
}
