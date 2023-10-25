import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/tailwind.css';
import { ThemeProvider } from '../src/components/theme-provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
      (Story) => (
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
