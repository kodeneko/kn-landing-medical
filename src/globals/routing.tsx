/* eslint-disable sort-keys/sort-keys-fix */
/* eslint-disable sort-keys */

import { MainLayout } from '@layouts/main';
import { HomePage } from '@pages/home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
]);

export default router;
