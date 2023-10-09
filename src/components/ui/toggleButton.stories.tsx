import { StoryObj, Meta } from "@storybook/react"

import * as React from "react"
import { useState } from "react"
import { MoonIcon, SunIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "c:/Users/22056/Web-Dev/euf-website-files/euf-website/src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "c:/Users/22056/Web-Dev/euf-website-files/euf-website/src/components/ui/dropdown-menu"
import { ThemeToggleButton } from "c:/Users/22056/Web-Dev/euf-website-files/euf-website/src/components/ui/themeToggleButton"

const meta: Meta<typeof ThemeToggleButton> = {
    title: "UI/ToggleButton",
    component: ThemeToggleButton
}

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const ToggleButton: Story = {
    args: {

    }
}