import { MainLayout } from '@layouts/main';
import { HomePage } from '@pages/home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{
  children: [{
    element: <HomePage />,
    path: '/'
  }],
  element: <MainLayout />,
  path: '/'
}]);

export default router;
