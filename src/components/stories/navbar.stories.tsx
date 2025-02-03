import { Meta, StoryObj } from "@storybook/react";
import { NavbarWithMenu } from "../ui/navigation/nav-bar";

const meta: Meta<typeof NavbarWithMenu> = {
  component: NavbarWithMenu,
  title: "UI/Nav/NavbarWithMenu",
  tags: ["autodocs"],
  // argTypes: {
  //     logoSrc: {
  //         type: "string"
  //     }
  // }
};

export default meta;

type Story = StoryObj<typeof NavbarWithMenu>;

export const Default: Story = {};
