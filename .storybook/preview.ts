import type { Preview } from '@storybook/react';
import '../index.css'; // Assuming styles are in index.css or equivalent

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#020617' }, // slate-950
      ],
    },
  },
};

export default preview;
