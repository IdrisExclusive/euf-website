import { Meta, StoryObj } from '@storybook/react';
import { ButtonWithDropdown } from '../ui/buttonWithDropdown';

const meta: Meta< typeof ButtonWithDropdown > = {
    component: ButtonWithDropdown,
    title: "UI/ButtonWithDropdown"
}

export default meta

type story = StoryObj<typeof ButtonWithDropdown>

export const Default: story = {
    
}