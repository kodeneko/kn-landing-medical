import { MainLayout } from '@layouts/main';
import { HomePage } from '@pages/home';
import { createBrowserRouter } from 'react-router-dom';

import {
  pathContact, pathDoctors, pathInfo, pathPricing, pathServices
} from './paths';

const router = createBrowserRouter([{
  children: [{
    children: [
      {
        element: <HomePage />,
        path: pathInfo
      },
      {
        element: <HomePage />,
        path: pathServices
      },
      {
        element: <HomePage />,
        path: pathDoctors
      },
      {
        element: <HomePage />,
        path: pathPricing
      },
      {
        element: <HomePage />,
        path: pathContact
      }
    ],
    element: <HomePage />,
    path: '/'
  }],
  element: <MainLayout />,
  path: '/'
}]);

export default router;
