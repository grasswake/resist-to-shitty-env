import type { Preview } from "@storybook/react";

import { withScreenshot } from "storycap";

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      variants: {
        small: {
          viewport: "iPhone SE",
        },
        large: {
          viewport: "Nexus 7",
        },
      },
    },
  },
};

export default preview;
