import { Meta, StoryObj } from "@storybook/react";
import { Rectangle } from "../ui/homepage";

const meta: Meta<typeof Rectangle> = {
    title: "UI/Homepage/Rectangle",
    component: Rectangle,
    tags: ["autodocs",]
}

export default meta

type story = StoryObj<typeof Rectangle>

export const Default: story = {

}