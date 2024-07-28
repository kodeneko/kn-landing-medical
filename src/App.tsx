import { MainLayout } from '@layouts';
import { HomePage } from '@pages';

import { getI18n } from './i18n';

getI18n().init();

const App = () => {
  return (
    <div>
      <MainLayout>
        <HomePage></HomePage>
      </MainLayout>
    </div>
  );
};

export default App;
