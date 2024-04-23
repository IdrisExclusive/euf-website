import React from 'react';
import type { Preview, ReactRenderer } from "@storybook/react";
import '../src/tailwind.css';
import ThemeProvider from '../src/components/theme-provider';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Prompt } from 'next/font/google'

const prompt = Prompt({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin']})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
        appDirectory: true,
      },
  },
  decorators: [
      withThemeByDataAttribute<ReactRenderer>({
        themes: {
          light: 'light',
          dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'class',
      }),
      (Story) => (
        <main className={`${prompt.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Story/>
        </ThemeProvider>
      </main>
    ),
  ],
};

export default preview;

