import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "../ui/homepage";

const meta: Meta<typeof Hero> = {
    title: "UI/Homepage/Hero",
    component: Hero,
    tags: ["autodocs",]
}

export default meta

type story = StoryObj<typeof Hero>

export const Default: story = {

}