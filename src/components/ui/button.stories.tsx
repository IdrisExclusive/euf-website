import {Meta, StoryObj} from '@storybook/react';
import {Button, buttonVariants} from './button';
import { MoonIcon } from "@radix-ui/react-icons"

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Click Me!',
        className: 'rounded-full',
        shadow: 'lg'
    }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
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

