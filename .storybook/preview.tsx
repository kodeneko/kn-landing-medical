import '../src/fontawesome';

import type { Preview } from '@storybook/react';

import React from 'react';
import { Provider } from 'react-redux';

import { getI18n } from '../src/i18n';
import { reduxStore } from '../src/store/index';

const preview: Preview = {
  decorators: [Story => {
    getI18n().init();
    return (
      <Provider store={reduxStore}>
        <Story />
      </Provider>
    );
  }],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
