import { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignUp } from "../ui/footer";

const meta: Meta<typeof NewsletterSignUp> = {
  title: "Newsletter",
  component: NewsletterSignUp,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof NewsletterSignUp>;

export const Default: story = {};
