import { Meta, StoryObj } from "@storybook/react";
import { ThemeToggleSwitch } from "../ui/navigation/themeToggleButton";

const meta: Meta<typeof ThemeToggleSwitch> = {
  title: "UI/Button/ThemeToggleSwitch",
  component: ThemeToggleSwitch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ThemeToggleSwitch>;

export const Default: Story = {};
