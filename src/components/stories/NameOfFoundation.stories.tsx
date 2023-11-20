import { Meta, StoryObj } from "@storybook/react";
import { NameOfFoundation } from "../ui/homepage";

const meta: Meta<typeof NameOfFoundation> = {
    title: "UI/Homepage/NameOfFoundation",
    component: NameOfFoundation,
    tags: ["autodocs",]
}

export default meta

type story = StoryObj<typeof NameOfFoundation>

export const Default: story = {

}