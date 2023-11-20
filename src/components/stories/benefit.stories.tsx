import { Meta, StoryObj } from "@storybook/react";
import { Benefit } from "../ui/homepage";

const meta: Meta<typeof Benefit> = {
    title: "UI/Homepage/Benefit",
    component: Benefit,
    tags: ["autodocs",]
}

export default meta

type story = StoryObj<typeof Benefit>

export const Default: story = {

}