import { Meta, StoryObj } from "@storybook/react";
import { MagneticComponent } from "../ui/magnet";

const meta: Meta<typeof MagneticComponent> = {
  title: "UI/MagneticComponent",
  component: MagneticComponent,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof MagneticComponent>;

export const Default: story = {};
