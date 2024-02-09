import React from 'react';
import type { Preview, ReactRenderer } from "@storybook/react";
import '../src/tailwind.css';
import ThemeProvider from '../src/components/theme-provider';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

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
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;

