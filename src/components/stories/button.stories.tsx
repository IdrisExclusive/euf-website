import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../ui/button';
import { MoonIcon } from "@radix-ui/react-icons";
import { userEvent, within } from '@storybook/testing-library';
            
const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Click Me!',
        className: 'rounded-full',
    }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    play:async ({canvasElement}) => {
        const canvas = within(canvasElement)
        await userEvent.click(canvas.getByRole("button"))
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

export const Icon: Story = {
    args: {
        ...Primary.args,
        variant: 'outline',
        size: 'icon',
        children: <MoonIcon />        
    }
}

