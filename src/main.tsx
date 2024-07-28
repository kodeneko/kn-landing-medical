import '@assets/styles/global.less';

import { reduxStore } from '@store/index';
import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as Container).render(<React.StrictMode>
  <Provider store={reduxStore}>
    <App />
  </Provider>
</React.StrictMode>);
