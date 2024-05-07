import { Meta, StoryObj } from "@storybook/react";
import { SignUpBotton } from "../ui/navigation/signUpBotton";

const meta: Meta<typeof SignUpBotton> = {
  title: "UI/Button/SignUpBotton",
  component: SignUpBotton,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof SignUpBotton>;

export const Default: story = {};
