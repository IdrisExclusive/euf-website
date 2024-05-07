import { Meta, StoryObj } from "@storybook/react";
import { AnimatedButtonMask } from "../ui/magnet";

const meta: Meta<typeof AnimatedButtonMask> = {
  title: "UI/AnimatedButtonMask",
  component: AnimatedButtonMask,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof AnimatedButtonMask>;

export const Default: story = {};
