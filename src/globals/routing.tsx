import { MainLayout } from '@layouts/main';
import { DocumentPage, HomePage } from '@pages/index';
import { createBrowserRouter } from 'react-router-dom';

import {
  pathContact, pathCookies, pathDoctors, pathInfo, pathLegal, pathPricing, pathPrivacy, pathServices
} from './paths';

const router = createBrowserRouter([{
  children: [
    {
      element: <HomePage />,
      path: '/'
    },
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
    },
    {
      element: <DocumentPage />,
      path: pathCookies
    },
    {
      element: <DocumentPage />,
      path: pathPrivacy
    },
    {
      element: <DocumentPage />,
      path: pathLegal
    }
  ],
  element: <MainLayout />,
  path: '/'
}]);

export default router;
