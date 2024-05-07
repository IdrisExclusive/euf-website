import { StoryObj, Meta } from "@storybook/react";

import { ThemeToggleButtonWithDropdown } from "../ui/navigation/themeToggleButton";

const meta: Meta<typeof ThemeToggleButtonWithDropdown> = {
  title: "UI/Button/ThemeToggleButtonWithDropdown",
  component: ThemeToggleButtonWithDropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButtonWithDropdown>;

export const Default: Story = {};
